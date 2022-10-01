import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  id!: number;
  url: any;
  category: Category = new Category();
  constructor(private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.categoryService.getCategoryById(this.id).subscribe(data => {
      this.category = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.categoryService.updateCategory(this.category).subscribe( data =>{
      this.goToCategoryList();
    }
    , error => console.log(error));
  }

  goToCategoryList(){
    this.router.navigate(['/category']);
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
