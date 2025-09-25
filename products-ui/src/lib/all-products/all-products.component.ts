/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';

import {
  selectProducts,
  selectLoading,
} from 'products/src/products/products.selectors';
import * as ProductsActions from 'products/src/products/products.actions';
@Component({
  selector: 'acme-ecommerce-all-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private store = inject(Store);
  category = 'All';
  products$ = this.store.select(selectProducts);
  loading$ = this.store.select(selectLoading);
  ngOnInit() {
    // ✅ Subscribe to paramMap to react to route changes
    this.route.paramMap.subscribe((params) => {
      this.category = params.get('category') || 'All';

      if (this.category === 'All') {
        this.store.dispatch(ProductsActions.loadProducts());
      } else {
        this.store.dispatch(
          ProductsActions.loadProductsByCategory({ category: this.category })
        );
      }
    });
  }
}
