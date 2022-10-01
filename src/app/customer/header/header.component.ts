import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CartService } from 'src/app/services/cart.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartQuantity=0;
  user!:Customer;
  constructor(cartService:CartService, private userService:CustomerService) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
     
    })

     userService.userObservable.subscribe((newUser) => {
     this.user = newUser;
     })

   }

  ngOnInit(): void {
  }

  logout(){
   this.userService.logout();
  }

  get isAuth(){
    //console.log(JSON.stringify(this.user));
   //const userVal = localStorage.getItem('User')
   //console.log (userVal)
    if (!this.user.firstName)
    //if (!userVal)
      return false;
    return true;
  }
}
