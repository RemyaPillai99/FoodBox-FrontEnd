import { Category } from "./category";

export class FoodItem {
    itemCode!: number;
    itemName!: string;
    itemDesc!: string;
    category!: Category;
    price!: number;
    discount!: number;
    image!: string;
    popularTag!:boolean;
    itemAvailTag!:boolean;

}
