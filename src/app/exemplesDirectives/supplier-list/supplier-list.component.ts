import { Component } from '@angular/core';
import { Supplier } from '../../models/Supplier';
import { SupplierListElementComponent } from "../supplier-list-element/supplier-list-element.component";
import { CommonModule } from '@angular/common';
import { SupplierDataService } from '../../services/supplier-data.service';

@Component({
  selector: 'app-supplier-list',
  imports: [SupplierListElementComponent, CommonModule],
  templateUrl: './supplier-list.component.html',
  styleUrl: './supplier-list.component.css'
})
export class SupplierListComponent {
  supplierList!: Supplier[]

  constructor(private supplierDataService: SupplierDataService) {
    supplierDataService.supplierBehave.subscribe(updatedList => {
      this.supplierList = updatedList;
    })
  }

  ngOnInit() {
    this.supplierDataService.addSupplier(new Supplier(666, "new Alice", "Robocorp", "010203040506"))
    console.log(this.supplierList)
  }
}
