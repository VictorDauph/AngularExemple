import { Component, Input } from '@angular/core';
import { Customer } from '../../models/Customer';

@Component({
  selector: 'app-customer-card-ng-for',
  imports: [],
  templateUrl: './customer-card-ng-for.component.html',
  styleUrl: './customer-card-ng-for.component.css'
})
export class CustomerCardNgForComponent {
  @Input() customer!: Customer
}
