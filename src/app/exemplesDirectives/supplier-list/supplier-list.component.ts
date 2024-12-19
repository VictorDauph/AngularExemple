import { Component } from '@angular/core';
import { Supplier } from '../../models/Supplier';
import { SupplierListElementComponent } from "../supplier-list-element/supplier-list-element.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-supplier-list',
  imports: [SupplierListElementComponent, CommonModule],
  templateUrl: './supplier-list.component.html',
  styleUrl: './supplier-list.component.css'
})
export class SupplierListComponent {
  supplierList: Supplier[] = [
    new Supplier(0, "Alice", "Apple", "0102030405"),
    new Supplier(1, "Alicia", "Microsoft", "0102030406"),
    new Supplier(2, "Alicio", "ACGD", "0102030407")
  ]

}
