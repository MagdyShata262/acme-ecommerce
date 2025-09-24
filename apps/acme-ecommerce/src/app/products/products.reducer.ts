// apps/acme-ecommerce/src/app/products/products.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { Product } from 'my-data-access';
import * as ProductsActions from './products.actions';

// ✅ 1. Define the state interface
export interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
  categories: string[]; // ✅ add this
  loadingCategories: boolean; // optional
    productsError: string | null;
  categoriesError: string | null;
}

// ✅ 2. Define and export the initial state
export const initialState: ProductsState = {
  categories: [],
  loadingCategories: false,
  products: [],
  loading: false,
  error: null,
  productsError: null,
  categoriesError: null,
};

// ✅ 3. Define the reducer
export const productsReducer = createReducer(
  initialState,
  // eslint-disable-next-line @ngrx/on-function-explicit-return-type
  on(ProductsActions.loadProducts, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  // eslint-disable-next-line @ngrx/on-function-explicit-return-type
  on(ProductsActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    loading: false,
    products,
  })),
  // eslint-disable-next-line @ngrx/on-function-explicit-return-type
  on(ProductsActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  // In products.reducer.ts
  // eslint-disable-next-line @ngrx/on-function-explicit-return-type
  on(ProductsActions.loadCategories, (state) => ({
    ...state,
    loadingCategories: true,
  })),
  // eslint-disable-next-line @ngrx/on-function-explicit-return-type
  on(ProductsActions.loadCategoriesSuccess, (state, { categories }) => ({
    ...state,
    loadingCategories: false,
    categories,
  })),
  // eslint-disable-next-line @ngrx/on-function-explicit-return-type
  on(ProductsActions.loadCategoriesFailure, (state, { error }) => ({
    ...state,
    loadingCategories: false,
    error,
  }))
);
