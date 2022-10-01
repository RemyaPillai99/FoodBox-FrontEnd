import { CartItem } from "./cart-item";

export class Order {
    id!:number;
    items!: CartItem[];
    totalPrice!:number;
    name!: string;
    emailId!: String;
    address!: string;
    //paymentId!: string;
    createdAt!: string;
    status!: string;
}
