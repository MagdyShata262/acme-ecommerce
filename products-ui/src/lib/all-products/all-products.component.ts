import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'acme-ecommerce-all-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent {}
