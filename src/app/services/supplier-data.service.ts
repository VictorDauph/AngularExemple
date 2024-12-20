import { Injectable } from '@angular/core';
import { Supplier } from '../models/Supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierDataService {
  supplierList: Supplier[] = [
    new Supplier(0, "Alice", "Apple", "0102030405"),
    new Supplier(1, "Alicia", "Microsoft", "0102030406"),
    new Supplier(2, "Alicio", "ACGD", "0102030407")
  ]
  constructor() { }
}
