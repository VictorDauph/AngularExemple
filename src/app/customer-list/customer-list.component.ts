import { Component } from '@angular/core';
import { Customer } from '../models/Customer';
import { CustomerDetailsComponent } from "../customer-details/customer-details.component";

@Component({
  selector: 'app-customer-list',
  imports: [CustomerDetailsComponent],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {
  customer1 = new Customer("Alice", "1 rue", 25)
  customers: Array<Customer> = [this.customer1, new Customer("Alicia", "2 rue", 26), new Customer("Alicius", "3 rue", 27)]

  handleClose(event: Event) {
    let childElement = event.currentTarget as HTMLElement
    childElement.classList.add("closed")
  }

  ngOnInit() {
    console.log(this.customers[0])
  }

}
