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

  // AllProductsComponent.ts
  getOptimizedImageUrl(imageUrl: string): string {
    // Try common size variants
    const sizes = [
      '_SL400_',
      '_SX400_',
      '_SY400_',
      '_SL300_',
      '_SX300_',
      '_SY300_',
    ];
    for (const size of sizes) {
      const optimized = imageUrl
        .replace('_SL1500_', size)
        .replace('_AC_', size);
      // You can optionally test if image exists via HEAD request, but for demo, just return first match
      if (imageUrl.includes('_SL1500_') || imageUrl.includes('_AC_')) {
        return optimized;
      }
    }
    return imageUrl; // fallback
  }
}
