// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AllProductsComponent } from '@acme/products-ui';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'categories/:category',
    loadComponent() {
      return import('@acme/products-ui').then((m) => m.AllProductsComponent);
    },
  },
];
