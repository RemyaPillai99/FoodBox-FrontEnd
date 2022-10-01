import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../models/cart';
import { CartItem } from '../models/cart-item';
import { FoodItem } from '../models/food-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  private cart:Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor(private httpClient: HttpClient) { }


  addToCart(food: FoodItem): void {
    let cartItem = this.cart.items
      .find(item => item.foodItem.itemCode === food.itemCode);
    if (cartItem)
      return;

    this.cart.items.push(new CartItem(food));
    this.setCartToLocalStorage();
  }
  // addToCart(itemCode: any):Observable<any>{
  //   return this.httpClient.post(`${this.baseURL}/addToCart`,itemCode );
  // }

  removeFromCart(foodItemCode : number){
    this.cart.items = this.cart.items
      .filter(item => item.foodItem.itemCode !== foodItemCode);
      console.log("removeFrom cart Service" + JSON.stringify(this.cart));
    this.setCartToLocalStorage();
    
  }

  changeQuantity(foodItemCode: number, quantity: number) {
    console.log("changeQty before:"+ quantity )
    let cartItem = this.cart.items
      .find(item => item.foodItem.itemCode === foodItemCode);
    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.foodItem.price;
    console.log("changeQty after:"+ quantity )
    this.setCartToLocalStorage();
  }

  clearCart(){
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  //send it as observable coz if we send it as Subject 
  //we would be to change it from outside 
  //only cart service should be able to do it
  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
  }

  getCart(): Cart{
    return this.cartSubject.value; //latest value
  }

  private setCartToLocalStorage(): void {

    //reduce -Calls the specified callback function
    // (prevSum, currentItem) for all the elements ie cart.items
    //0 initial value 
    this.cart.totalPrice = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);//add the updated cart
    console.log("setCartToLocalStorage" + JSON.stringify(this.cart));
  }

  private getCartFromLocalStorage():Cart{
    const cartJson = localStorage.getItem('Cart');
    //if cartJson doesn't exist create new Cart Object
    //else Json.parse -> creates an object ie Cart
    return cartJson ? JSON.parse(cartJson):new Cart();
  }


}
