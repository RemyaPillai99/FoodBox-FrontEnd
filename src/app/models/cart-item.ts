import { FoodItem } from "./food-item";

export class CartItem {
    constructor(public foodItem:FoodItem){
 }

 quantity:number = 1 ;
 price: number = this.foodItem.price;
//  spInstruction: string = '';

}
