import { Component } from '@angular/core';
import { Customer } from '../../models/Customer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-ng-for',
  imports: [CommonModule],
  templateUrl: './customer-ng-for.component.html',
  styleUrl: './customer-ng-for.component.css'
})
export class CustomerNgForComponent {
  customerList: Customer[] = [
    new Customer("Alice", "1 rue des rues", 25),
    new Customer("Alicia", "2 rue des rues", 35),
    new Customer("Alicio", "3 rue des rues", 50),
    new Customer("Alicius", "4 rue des rues", 75)
  ]
}
