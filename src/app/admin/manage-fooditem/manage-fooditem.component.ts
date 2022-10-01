import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodItem } from 'src/app/models/food-item';
import { FooditemService } from 'src/app/services/fooditem.service';

@Component({
  selector: 'app-manage-fooditem',
  templateUrl: './manage-fooditem.component.html',
  styleUrls: ['./manage-fooditem.component.css']
})
export class ManageFooditemComponent implements OnInit {

  
  public itemList!: FoodItem[];
  searchKey!: string;
  constructor(private foodItemService: FooditemService,
    private router: Router) { }

  ngOnInit(): void {
    this.getFoodItemList();
  }

  private getFoodItemList(){
    this.foodItemService.getFoodItemList().subscribe(data =>
      { this.itemList = data}
      );
  }

  
  updateFoodItem(id: number){
    this.router.navigate(['update-foodItem', id]);
  }

  addFoodItem(){
    this.router.navigate(['create-foodItem']);
  }


  deleteFoodItem(id: number){
    this.foodItemService.deleteFoodItem(id).subscribe( data => {
      console.log(data);
      this.getFoodItemList();
    })
  }

  searchFoodItem(){
    if(this.searchKey==''){
      this.getFoodItemList();
    }else{
      this.foodItemService.searchFoodItem(this.searchKey).subscribe(data=>{
        this.itemList=data;
      })
    }
  }


}
