import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css']
})
export class ManageCategoryComponent implements OnInit {

  public categoryList!: Category[];
  searchKey!: string;
  constructor(private categoryService: CategoryService,
              private router: Router) { }

  ngOnInit(): void {
    this.getCategoryList();
  }

  private getCategoryList(){
    this.categoryService.getCategoryList().subscribe(data => {
      this.categoryList = data;
    });
  }

  updateCategory(id: number){
    this.router.navigate(['update-category', id]);
  }

  addCategory(){
    this.router.navigate(['create-category']);
  }


  deleteCategory(id: number){
    this.categoryService.deleteCategory(id).subscribe( data => {
      console.log(data);
      this.getCategoryList();
    })
  }
   searchCategory(){
    if(this.searchKey==''){
      this.getCategoryList();
    }else{
      this.categoryService.searchCategory(this.searchKey).subscribe(data=>{
        this.categoryList=data;
      })
    }
  }


}
