import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { IUserRegister } from '../customer/interfaces/iuser-register';
import { Customer } from '../models/customer';

const USER_KEY = 'User';
@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  private userSubject = new BehaviorSubject<Customer>(this.getUserFromLocalStorage());
  public userObservable: Observable<Customer>;

  private baseUrl = "http://localhost:8080/users"
  private loginURL = "http://localhost:8080/login"
  private regURL = "http://localhost:8080/register"

  constructor(private httpClient: HttpClient) {
    this.userObservable = this.userSubject.asObservable();
  }

  public get currentUser(): Customer {
    return this.userSubject.value;
  }

  //pass IUserLogin interface ref with just username and password
  loginUser(user: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(`${this.loginURL}`, user).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          // this.toastrService.success(
          //   `Welcome to Foodmine ${user.name}!`,
          //   'Login Successful'
          // )
        },
        error: (errorResponse) => {
          console.log(errorResponse.error, 'Login Failed');
        }
      })
    );
  }

  //register

  register(userRegister: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(`${this.regURL}`, userRegister).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          // this.toastrService.success(
          //   `Welcome to Foodmine ${user.name}!`,
          //   'Login Successful'
          // )
        },
        error: (errorResponse) => {

          console.log(errorResponse.error, 'Registeration Failed');
        }
      })
    );
  }

  logout() {
    this.userSubject.next(new Customer());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
  }

  getCustomerList(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${this.baseUrl}`);

  }

  searchCustomer(keyword: any): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${this.baseUrl}/search/${keyword}`);
  }

  private setUserToLocalStorage(user: Customer) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage(): Customer {
    const userJson = localStorage.getItem(USER_KEY);
    if (userJson) return JSON.parse(userJson) as Customer;
    return new Customer();
  }
}
