import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { IUserRegister } from '../interfaces/iuser-register';
import { PasswordsMatchValidator } from '../validators/password-match-validator';
//import { PasswordsMatchValidator } from 'src/app/shared/validators/password_match_validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  registerForm!:FormGroup;
  isSubmitted = false;
  userVal: Customer = new Customer();
  

  returnUrl = '';
  constructor(
    private formBuilder: FormBuilder,
    private userService: CustomerService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fname: ['', [Validators.required, Validators.minLength(4)]],
      lname: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', Validators.required],
      address: ['', [Validators.required, Validators.minLength(10)]],
      phoneNum :['', [Validators.required, Validators.minLength(10)]]
    },{
      validators: PasswordsMatchValidator('password','confirmPassword')
    });

    this.returnUrl= this.activatedRoute.snapshot.queryParams.returnUrl;
  }

  get fc() {
    return this.registerForm.controls;
  }

  submit(){
    this.isSubmitted = true;
    if(this.registerForm.invalid) return;

    const fv= this.registerForm.value;
   
    this.userVal.emailId = fv.email;
    this.userVal.firstName = fv.fname;
    this.userVal.lastName = fv.lname;
    this.userVal.password = fv.password;
    //this.userVal.confirmPassword =fv.confirmPassword;
    this.userVal.address = fv.address;
    this.userVal.phoneNum= fv.phoneNum;


   
    this.userService.register(this.userVal).subscribe( data  => {
      this.router.navigateByUrl(this.returnUrl);
    })
  }
}
