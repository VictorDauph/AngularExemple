import { Component } from '@angular/core';
import { Customer } from '../../models/Customer';
import { CommonModule } from '@angular/common';
import { CustomerCardNgForComponent } from "../customer-card-ng-for/customer-card-ng-for.component";
import { CustomerDataService } from '../../services/customer-data.service';

@Component({
  selector: 'app-customer-ng-for',
  imports: [CommonModule, CustomerCardNgForComponent],
  templateUrl: './customer-ng-for.component.html',
  styleUrl: './customer-ng-for.component.css'
})
export class CustomerNgForComponent {
  customerList!: Customer[]

  constructor(private customerDataService: CustomerDataService) {
    this.customerList = customerDataService.customerList
  }
}
