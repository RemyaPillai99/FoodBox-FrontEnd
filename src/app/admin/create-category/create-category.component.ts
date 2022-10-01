import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  id!: number;
  category: Category = new Category();
  constructor(private categoryService: CategoryService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveCategory(){
    this.categoryService.createCategory(this.category).subscribe( data =>{
      console.log(data);
      this.goToCategoryList();
    },
    error => console.log(error));
  }

  goToCategoryList(){
    this.router.navigate(['/category']);
  }
  
  onSubmit(){
    console.log(this.category);
    this.saveCategory();
  }
}
