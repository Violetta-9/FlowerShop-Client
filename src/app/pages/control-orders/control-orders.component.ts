import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {AdminService, OrdersDTO, OrderService} from "../../core/services/flower-shop";
import {FormBuilder} from "@angular/forms";
import {MatCheckboxChange} from "@angular/material/checkbox";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-control-orders',
  templateUrl: './control-orders.component.html',
  styleUrls: ['./control-orders.component.css']
})
export class ControlOrdersComponent implements OnInit {
  public dates: OrdersDTO[];
  constructor( public orderServices: OrderService,private route: ActivatedRoute) {
  }
  displayedColumns: string[] = ['flowerTitle', 'userAdress', 'phone', 'totalPrice','timeOfOrder','isCompleted'];
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {});
    this.orderServices.getAllOrders(false).subscribe(x=>this.dates=x)
  }


  compleate($event: MatCheckboxChange, id) {
    console.log($event)
    if($event.checked){
      console.log("compleated"+id)
      this.orderServices.completedOrders(id).subscribe(x=>console.log(x));
    }
  }

  dateTime(timeOfOrder: any) {
    // const [dateValues, timeValues] = timeOfOrder.split(/T|\./);
    // console.log(dateValues.replace(/-/g,'.')); // 👉️ "09/24/2022"
    // console.log(timeValues);
    return  new Date(timeOfOrder).toLocaleString();
  }

  showCompleated() {
    this.displayedColumns=['flowerTitle', 'userAdress', 'phone', 'totalPrice','timeOfOrder'];
    this.orderServices.getAllOrders(true).subscribe(x=>this.dates=x)
  }
}






