import { Customer } from "./customer";

export class OrderDTO {
    id!:number;
    User!:Customer;
    createdAt!:string;
    totalPrice!:number;
    status!:string;
    address!:string;
    
}
