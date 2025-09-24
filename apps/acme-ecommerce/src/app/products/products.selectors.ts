// apps/acme-ecommerce/src/app/products/products.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from './products.reducer';

const getProductsState = createFeatureSelector<ProductsState>('products');

export const selectProducts = createSelector(
  getProductsState,
  (state) => state.products
);
export const selectLoading = createSelector(
  getProductsState,
  (state) => state.loading
);
export const selectError = createSelector(
  getProductsState,
  (state) => state.error
);
// products.selectors.ts
export const selectCategories = createSelector(
  getProductsState,
  (state) => state.categories
);
