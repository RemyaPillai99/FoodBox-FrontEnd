import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { FoodItem } from 'src/app/models/food-item';
import { CategoryService } from 'src/app/services/category.service';
import { FooditemService } from 'src/app/services/fooditem.service';

@Component({
  selector: 'app-create-fooditem',
  templateUrl: './create-fooditem.component.html',
  styleUrls: ['./create-fooditem.component.css']
})
export class CreateFooditemComponent implements OnInit {

  id!: number;
  url: any;
  foodItem: FoodItem = new FoodItem();
  categoryList!: Category[];
  selectedCategory!: Category;
  constructor(private categoryService: CategoryService,
    private fooditemService: FooditemService,
    private router: Router) { }

  ngOnInit(): void {

    this.getCategoryList();
  }

  private getCategoryList() {
    this.categoryService.getCategoryList().subscribe(data => {
      this.categoryList = data;
    });
  }

  saveFoodItem() {
    this.fooditemService.createFoodItem(this.foodItem).subscribe(data => {
      console.log(data);
      this.goToFoodItemList();
    },
      error => console.log(error));
  }

  goToFoodItemList() {
    this.router.navigate(['/foodItem']);
  }
  onSubmit() {
    console.log(this.foodItem);
    //    console.log(JSON.stringify(this.foodItem.image).split('\\').pop());
    this.foodItem.image = this.foodItem.image.replace(/^.*[\\\/]/, '');
    this.saveFoodItem();
  }


  selectFile(event: any) { //Angular 11, for stricter type
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      //this.msg = "";
      this.url = reader.result;
    }
  }

}
