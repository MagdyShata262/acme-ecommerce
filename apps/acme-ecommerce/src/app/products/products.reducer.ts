// apps/acme-ecommerce/src/app/products/products.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { Product } from 'my-data-access';
import * as ProductsActions from './products.actions';

// ✅ 1. Define the state interface
export interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

// ✅ 2. Define and export the initial state
export const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

// ✅ 3. Define the reducer
export const productsReducer = createReducer(
  initialState,
  on(ProductsActions.loadProducts, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(ProductsActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    loading: false,
    products,
  })),
  on(ProductsActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
