import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { FoodItem } from 'src/app/models/food-item';
import { CategoryService } from 'src/app/services/category.service';
import { FooditemService } from 'src/app/services/fooditem.service';
  
// import { NgSelectModule } from '@ng-select/ng-select'; 

@Component({
  selector: 'app-update-food-item',
  templateUrl: './update-food-item.component.html',
  styleUrls: ['./update-food-item.component.css']
})
export class UpdateFoodItemComponent implements OnInit {

  id!: number;
  foodItem: FoodItem = new FoodItem();
  categoryList!: Category[];
  selectedCategory: Category = new Category();
  url: any;
  foodImage !:string;
  constructor(private foodItemService: FooditemService, 
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.foodItemService.getFoodItemById(this.id).subscribe( data => {
      this.foodItem = data;
      this.foodImage = this.foodItem.image;
      this.selectedCategory = this.foodItem.category;
    },error => console.log(error));
   
    this.getCategoryList();
    // this.getCategory
    //this.selectedCategory.categoryName = this.foodItem.category.categoryName;
  }

  private getCategoryList() {
    this.categoryService.getCategoryList().subscribe(data => {
      this.categoryList = data;
    });
  }
 

  goToFoodItemList(){
    this.router.navigate(['/foodItem']);
  }

  updateFoodItem() {
    this.foodItemService.updateFoodItem(this.foodItem).subscribe( data =>{
      console.log(data);
      this.goToFoodItemList();
    }
    , error => console.log(error));
  }

  onSubmit(){
    this.foodItem.image = this.foodItem.image.replace(/^.*[\\\/]/, '');
    this.updateFoodItem();
   
  }
  selectFile(event: any) { //Angular 11, for stricter type
     var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.url = reader.result;
    }
  }

}
