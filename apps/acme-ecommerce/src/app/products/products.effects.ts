import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ProductService } from 'my-data-access';
import * as ProductsActions from './products.actions';

@Injectable()
export class ProductsEffects {
  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductsActions.loadProducts),
      mergeMap(() =>
        this.productService.getAll().pipe(
          map((products) => ProductsActions.loadProductsSuccess({ products })),
          catchError((error) =>
            of(ProductsActions.loadProductsFailure({ error: error.message }))
          )
        )
      )
    );
  });
  // In products.effects.ts
  loadCategories$ = createEffect(() =>
    // eslint-disable-next-line @ngrx/prefer-effect-callback-in-block-statement
    this.actions$.pipe(
      ofType(ProductsActions.loadCategories),
      mergeMap(() =>
        this.productService.getCategories().pipe(
          map((categories) =>
            ProductsActions.loadCategoriesSuccess({ categories })
          ),
          catchError((error) =>
            of(ProductsActions.loadCategoriesFailure({ error: error.message }))
          )
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}
