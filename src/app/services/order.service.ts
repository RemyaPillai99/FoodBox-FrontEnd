import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../models/cart-item';
import { Order } from '../models/order';
import { OrderItem } from '../models/order-item';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private shopURL = "http://localhost:8080/shop"
  private adminURL = "http://localhost:8080/admin"

  constructor(private httpClient: HttpClient) { }


  
  // placeOrder(orderMap:any,orderItem:any):Observable<Object>{
  //   return this.httpClient.post(`${this.shopURL}`,orderMap,orderItem);
  // }

  placeOrder(orderMap:Order):Observable<Object>{
    return this.httpClient.post(`${this.shopURL}/pay`,orderMap);
  }

  findLastOrder(emailId: string):Observable<Order>{
    return this.httpClient.get<Order>(`${this.shopURL}/orderSummary/${emailId}`);
  }

  getOrderReport(): Observable<OrderItem[]> {
    return this.httpClient.get<OrderItem[]>(`${this.adminURL}/orderReport`);

  }
}
