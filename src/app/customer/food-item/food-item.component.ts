import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { FoodItem } from 'src/app/models/food-item';
import { CartService } from 'src/app/services/cart.service';
import { FooditemService } from 'src/app/services/fooditem.service';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {

  id!: number;
  food: FoodItem = new FoodItem();
  selectedCategory: Category = new Category();
  constructor(private foodItemService: FooditemService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.foodItemService.getFoodItemDetails(this.id).subscribe( data => {
      this.food = data;
      this.selectedCategory = this.food.category;
    },error => console.log(error));
   
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigate(['/cart']);

  }

}
