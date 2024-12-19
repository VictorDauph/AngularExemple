import { Component } from '@angular/core';
import { Customer } from '../../models/Customer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-list-ng-if',
  imports: [CommonModule],
  templateUrl: './customer-list-ng-if.component.html',
  styleUrl: './customer-list-ng-if.component.css'
})
export class CustomerListNgIfComponent {

  customerList: Customer[] = [
    new Customer("Alice", "1 rue des rues", 25),
    new Customer("Alicia", "2 rue des rues", 35),
    new Customer("Alicio", "3 rue des rues", 50),
    new Customer("Alicius", "4 rue des rues", 75)
  ]


  //customerList: Customer[] = []

  //customer: Customer = this.customerList[0]
}
