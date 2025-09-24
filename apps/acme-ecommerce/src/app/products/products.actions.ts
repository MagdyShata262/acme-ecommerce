// apps/acme-ecommerce/src/app/products/products.actions.ts
import { createAction, props } from '@ngrx/store';

import { Product } from 'my-data-access';

export const loadProducts = createAction('[Products] Load Products');
export const loadProductsSuccess = createAction(
  '[Products] Load Products Success',
  props<{ products: Product[] }>()
);
export const loadProductsFailure = createAction(
  '[Products] Load Products Failure',
  props<{ error: string }>()
);
