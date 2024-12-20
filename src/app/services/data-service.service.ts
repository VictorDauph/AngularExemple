import { Injectable } from '@angular/core';
import { Customer } from '../models/Customer';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  customers: Array<Customer> = [
    new Customer("Alice", "1 rue", 25),
    new Customer("Alicia", "2 rue", 26),
    new Customer("Alicius", "3 rue", 27)
  ]

  customerBehave: BehaviorSubject<Array<Customer>> = new BehaviorSubject<Array<Customer>>(this.customers)

  addCustomer(customer: Customer) {
    const updatedList = [...this.customers, customer]
    this.customerBehave.next(updatedList);
  }

  constructor() { }
}
