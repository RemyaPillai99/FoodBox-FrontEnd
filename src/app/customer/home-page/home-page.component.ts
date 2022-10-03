import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { FoodItem } from 'src/app/models/food-item';
import { CategoryService } from 'src/app/services/category.service';
import { FooditemService } from 'src/app/services/fooditem.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  categoryList!: Category[];
  foodItemList!: FoodItem[];
  searchKey = '';
  constructor(private categoryService: CategoryService,
    private foodItemService: FooditemService,
    private router:Router) {
     }

  ngOnInit(): void {
    this.listAllPopular();
   this.getCategoryList();
  }

  getCategoryList() {
    this.categoryService.getCategoryList().subscribe(data => {
      this.categoryList = data;
    });
  }

  shopByCuisineName(categoryName: string){
    this.foodItemService.getAllFoodItemByCategoryName(categoryName).subscribe(data =>{
      this.foodItemList = data;
      console.log(this.foodItemList[0]);
    });
  }

  listAllFoodItems(){
    this.foodItemService.getFoodItemList().subscribe(data =>
      { this.foodItemList = data;
      console.log("##All food");
      console.log(JSON.stringify(this.foodItemList));
  });
  }

  viewFoodItem(id: number){
    console.log("View Food" + id);
    this.router.navigate(['view-foodItem', id]);
  }

  search(){
    if(this.searchKey==''){
      this.listAllFoodItems();
    }else{
      this.foodItemService.searchFoodItemDetails(this.searchKey).subscribe(data=>{
        this.foodItemList=data;
      })
    }
  }

  listAllPopular(){
    this.foodItemService.getPopularList().subscribe(data =>
      { this.foodItemList = data;
      console.log(this.foodItemList);
  });

  }

}
