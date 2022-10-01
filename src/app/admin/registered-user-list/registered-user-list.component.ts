import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-registered-user-list',
  templateUrl: './registered-user-list.component.html',
  styleUrls: ['./registered-user-list.component.css']
})
export class RegisteredUserListComponent implements OnInit {

  
  public customerList!: Customer[];
  searchKey!: string;
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomerList();
  }

  private getCustomerList(){
    this.customerService.getCustomerList().subscribe(data => {
      this.customerList = data;
    });
  }

   searchCustomer(){
    if(this.searchKey==''){
      this.getCustomerList();
    }else{
      this.customerService.searchCustomer(this.searchKey).subscribe(data=>{
        this.customerList=data;
      })
    }
  }
}
