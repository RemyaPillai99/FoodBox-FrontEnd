import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  user: Customer = new Customer();
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  isSignUpFailed = false;
  errorMessage = '';
  returnURL = '';

  constructor(private customerService: CustomerService,
    private router :Router , 
    private activatedRoute :ActivatedRoute) { }

  ngOnInit(): void {

    this.returnURL = this.activatedRoute.snapshot.queryParams.returnURL;

  }


  onSubmit() {
    //here could just pass the values instead of object IUserLogin {email password}
    this.customerService.loginUser(this.user).subscribe(data => {
     this.router.navigateByUrl(this.returnURL);

    },
      error => {
        console.log(error)
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );

  }

}
