import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from '../models/Customer';

@Component({
  selector: 'app-customer-details',
  imports: [],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent {
  @Input() customer: Customer = new Customer("", "", 0)

  @Output() close = new EventEmitter<Event>();


  closeDetails(event: Event) {
    this.close.emit(event)
  }
}
