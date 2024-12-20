import { Injectable } from '@angular/core';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  customers: Array<Customer> = [
    new Customer("Alice", "1 rue", 25),
    new Customer("Alicia", "2 rue", 26),
    new Customer("Alicius", "3 rue", 27)
  ]

  constructor() { }
}
