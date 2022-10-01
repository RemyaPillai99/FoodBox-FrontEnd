import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { Order } from 'src/app/models/order';
import { CustomerService } from 'src/app/services/customer.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  order!:Order
  user!:Customer
  constructor(orderService: OrderService,
    userService: CustomerService) {
    this.user = userService.currentUser;
    let emailId = userService.currentUser.emailId;
    orderService.findLastOrder(emailId).subscribe(order =>
      {
        this.order = order;
        console.log(JSON.stringify(this.order));
      });
   }

  ngOnInit(): void {
  }

}
