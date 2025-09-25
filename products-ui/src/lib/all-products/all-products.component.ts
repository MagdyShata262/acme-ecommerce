/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';

import {
  selectProducts,
  selectLoading,
} from 'products/src/products/products.selectors';
@Component({
  selector: 'acme-ecommerce-all-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent {
  private route = inject(ActivatedRoute);
  private store = inject(Store);
  category = 'All';
  products$ = this.store.select(selectProducts);
  loading$ = this.store.select(selectLoading);
}
