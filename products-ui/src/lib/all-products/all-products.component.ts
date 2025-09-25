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

    this.products$.subscribe((products) => {
      if (products && products.length > 0) {
        const firstImage = this.getOptimizedImageUrl(products[0].image);
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = firstImage;
        document.head.appendChild(link);
      }
    });
  }

  // In AllProductsComponent.ts
getOptimizedImageUrl(imageUrl: string): string {
  // ✅ Step 1: Trim whitespace
  let cleanUrl = imageUrl.trim();

  // ✅ Step 2: Remove trailing _t.png, _t.jpg, etc.
  cleanUrl = cleanUrl.replace(/_t\.(png|jpg|jpeg)$/i, '');

  // ✅ Step 3: Try common working size variants
  const sizes = [
    '_SL400_', '_SX400_', '_SY400_',
    '_SL300_', '_SX300_', '_SY300_',
    '_SL200_', '_SX200_', '_SY200_'
  ];

  for (const size of sizes) {
    if (cleanUrl.includes('_AC_')) {
      return cleanUrl.replace('_AC_', size);
    }
    if (cleanUrl.includes('_SL1500_')) {
      return cleanUrl.replace('_SL1500_', size);
    }
    if (cleanUrl.includes('_SX679_')) {
      return cleanUrl.replace('_SX679_', size);
    }
    if (cleanUrl.includes('_SY879_')) {
      return cleanUrl.replace('_SY879_', size);
    }
  }

  // ✅ Step 4: Fallback — return cleaned URL if no replacement found
  return cleanUrl;
}

onImageError(event: any) {
  event.target.src = 'https://via.placeholder.com/300x300?text=No+Image';
  event.target.alt = 'Image not available';
}
}
