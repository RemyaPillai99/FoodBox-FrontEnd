import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 
  
  private baseURL = "http://localhost:8080/admin/category"
  constructor(private httpClient: HttpClient) { }

  getCategoryList() : Observable <Category[]>{
    return this.httpClient.get<Category[]>(`${this.baseURL}`);
    
  }

  getCategoryById(id: number): Observable<Category>{
    return this.httpClient.get<Category>(`${this.baseURL}/${id}`);
  }

  searchCategory(keyword:any):Observable<Category[]>{
    return this.httpClient.get<Category[]>(`${this.baseURL}/search/${keyword}`);
  }

  createCategory(category: Category): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/Add`, category);
  }
  
  updateCategory(category: Category): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/Edit`, category);
  }

  deleteCategory(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/Delete/${id}`);
  }

  
}
