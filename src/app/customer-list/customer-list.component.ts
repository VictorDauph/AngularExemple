import { Component } from '@angular/core';
import { Customer } from '../models/Customer';
import { CustomerDetailsComponent } from "../customer-details/customer-details.component";
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-customer-list',
  imports: [CustomerDetailsComponent],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {

  customers!: Array<Customer>;

  constructor(private dataService: DataServiceService) {
    this.customers = this.dataService.customers
  }



  handleClose(event: Event) {
    let childElement = event.currentTarget as HTMLElement
    childElement.classList.add("closed")
  }

  ngOnInit() {
    console.log(this.customers[0])

  }

}
