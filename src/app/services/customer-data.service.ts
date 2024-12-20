import { Injectable } from '@angular/core';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {

  customerList = [
    new Customer("Alice", "1 rue des rues", 25),
    new Customer("Alicia", "2 rue des rues", 35),
    new Customer("Alicio", "3 rue des rues", 50),
    new Customer("Alicius", "4 rue des rues", 75)
  ]

  constructor() { }
}
