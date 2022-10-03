import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order';
import { CartService } from 'src/app/services/cart.service';
import { CustomerService } from 'src/app/services/customer.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  order: Order = new Order();
  checkoutForm!: FormGroup;
  errMessage!: string;
  showErrorsWhen: boolean = true;
  isCartEmpty : boolean = false;
  
  
 
  constructor(private cartService: CartService,
    private userService: CustomerService,
    private orderService : OrderService,
    private formBuilder: FormBuilder,
    private router: Router) {
    const cart = cartService.getCart();
    this.order.items = cart.items;
    this.order.totalPrice = cart.totalPrice;
  }

  ngOnInit(): void {
     if (this.order.items.length == 0){
         this.isCartEmpty = true;
     }
    
    let { firstName, lastName, phoneNum ,address} = this.userService.currentUser;

    this.checkoutForm = this.formBuilder.group({
      name: [firstName, Validators.required],
      lastName: [lastName, Validators.required],
      phoneNo: [phoneNum, Validators.required],
      address: [address, Validators.required]
    });
  }

  get fc() {
    return this.checkoutForm.controls;
  }

  createOrder() {
    console.log("Inside createOrder");
    if (this.order.items.length == 0){
         this.errMessage = "Cart is empty";
         this.isCartEmpty = true;
         return;
    }
    if (this.checkoutForm.invalid) {
      this.errMessage = "Please fill the inputs-invalid inputs";
      return;
    }
    console.log("Inside createOrder");
    this.order.name = this.fc.name.value;
    this.order.address = this.fc.address.value;
    this.order.emailId = this.userService.currentUser.emailId;

    this.orderService.placeOrder(this.order).subscribe({
      next:() => {
        this.cartService.clearCart(); 
        this.order = new Order();
        this.router.navigateByUrl('/order-summary');
      },
      error:(errorResponse) => {
        console.log(errorResponse);
        this.router.navigateByUrl('/cart');
      }
    }
    );

  }

}


