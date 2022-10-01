import { Component, OnInit } from '@angular/core';
import { OrderItem } from 'src/app/models/order-item';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-report',
  templateUrl: './order-report.component.html',
  styleUrls: ['./order-report.component.css']
})


export class OrderReportComponent implements OnInit {

  public orderItemList !: OrderItem[];
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrderReport();
  }

  private getOrderReport(){
    this.orderService.getOrderReport().subscribe(data => {
      this.orderItemList= data;
      console.log(JSON.stringify(this.orderItemList));
    });
  }

}
