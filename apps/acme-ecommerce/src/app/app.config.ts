import { ApplicationConfig, isDevMode } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { appRoutes } from './app.routes';
// import * as fromApp from './state/app.reducer';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { productsReducer } from 'products/src/products/products.reducer';

import { ProductsEffects } from 'products/src/products/products.effects';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      appRoutes,
      withEnabledBlockingInitialNavigation(),
      withComponentInputBinding()
    ),
    provideAnimations(),
    provideStore({ products: productsReducer }),
    provideEffects([ProductsEffects]),

    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
    }),
    provideHttpClient(withFetch()),
  ],
};
