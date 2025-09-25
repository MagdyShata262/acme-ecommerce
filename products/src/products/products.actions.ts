// apps/acme-ecommerce/src/app/products/products.actions.ts
import { createAction, props } from '@ngrx/store';

import { Product } from 'my-data-access';

export const loadProducts = createAction('[Products] Load Products');
export const loadProductsSuccess = createAction(
  '[Products] Load Products Success',
  props<{ products: Product[] }>()
);
export const loadCategories = createAction('[Products] Load Categories');
export const loadCategoriesSuccess = createAction(
  '[Products] Load Categories Success',
  props<{ categories: string[] }>()
);
export const loadProductsFailure = createAction(
  '[Products] Load Products Failure',
  props<{ error: string }>()
);
export const loadCategoriesFailure = createAction(
  '[Products] Load Categories Failure',
  props<{ error: string }>()
);
export const loadProductsByCategory = createAction(
  '[Products] Load Products By Category',
  props<{ category: string }>()
);
