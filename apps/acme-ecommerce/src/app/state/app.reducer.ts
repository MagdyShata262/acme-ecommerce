import { ActionReducerMap } from '@ngrx/store';

// Define at least one property — even if empty for now
export interface AppState {
  // Later: cart: CartState, products: ProductsState, etc.
  dummy?: null; // 👈 Temporary placeholder to avoid empty interface
}

// Create empty reducer map (or add feature reducers later)
export const reducers: ActionReducerMap<AppState> = {
  // Later: cart: cartReducer, products: productsReducer
};

export const metaReducers = [];
