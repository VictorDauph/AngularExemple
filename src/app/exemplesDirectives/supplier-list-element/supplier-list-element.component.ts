import { Component, Input } from '@angular/core';
import { Supplier } from '../../models/Supplier';

@Component({
  selector: 'app-supplier-list-element',
  imports: [],
  templateUrl: './supplier-list-element.component.html',
  styleUrl: './supplier-list-element.component.css'
})
export class SupplierListElementComponent {
  @Input() supplier!: Supplier;
}
