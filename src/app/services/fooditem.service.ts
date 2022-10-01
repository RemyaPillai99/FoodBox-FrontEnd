import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodItem } from '../models/food-item';

@Injectable({
  providedIn: 'root'
})
export class FooditemService {

  private baseURL = "http://localhost:8080/admin/foodItem"
  private shopURL = "http://localhost:8080/shop"
  private URL = "http://localhost:8080"
  constructor(private httpClient: HttpClient) { }

  getFoodItemList() : Observable <FoodItem[]>{
    return this.httpClient.get<FoodItem[]>(`${this.baseURL}`);
    
  }

  getPopularList() : Observable <FoodItem[]>{
    return this.httpClient.get<FoodItem[]>(`${this.URL}/popular`);
    
  }


  getFoodItemById(id: number): Observable<FoodItem>{
    return this.httpClient.get<FoodItem>(`${this.baseURL}/${id}`);
  }

  searchFoodItem(keyword:any):Observable<FoodItem[]>{
    return this.httpClient.get<FoodItem[]>(`${this.baseURL}/search/${keyword}`);
  }

  //duplicate 
  getFoodItemDetails(id: number): Observable<FoodItem>{
    return this.httpClient.get<FoodItem>(`${this.URL}/food/${id}`);
  }
  //duplicate
  searchFoodItemDetails(keyword:any):Observable<FoodItem[]>{
    return this.httpClient.get<FoodItem[]>(`${this.URL}/search/${keyword}`);
  }


  createFoodItem(foodItem: FoodItem): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/Add`, foodItem);
  }
  
  updateFoodItem(foodItem: FoodItem): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/Edit`, foodItem);
  }

  deleteFoodItem(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/Delete/${id}`);
  }

  getAllFoodItemByCategoryName(cuisineName: string): Observable<FoodItem[]>{
    return this.httpClient.get<FoodItem[]>(`${this.shopURL}/cuisine/${cuisineName}`);
  }
}
