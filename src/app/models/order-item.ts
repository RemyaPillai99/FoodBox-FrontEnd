import { Customer } from "./customer";
import { FoodItem } from "./food-item";
import { OrderDTO } from "./order-dto";

export class OrderItem {

    id!:number;
    order!: OrderDTO;
    foodItem!:FoodItem;
    user!:Customer;
    rate!:number;
    quantity!:string;
    price!:number;
    spInstruction!:string;
}
