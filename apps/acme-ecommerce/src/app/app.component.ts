/* eslint-disable @ngrx/avoid-dispatching-multiple-actions-sequentially */
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NavComponent } from './nav/nav.component';
import { Store } from '@ngrx/store';
import { selectProducts, selectLoading } from './products/products.selectors';
import { AsyncPipe, CommonModule, NgFor, NgIf } from '@angular/common';
import * as ProductsActions from './products/products.actions';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    NavComponent,
    AsyncPipe,
    CommonModule,
    NgIf,
    NgFor,
  ],
  selector: 'acme-ecommerce-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'acme-ecommerce';

  private store = inject(Store);
  products$ = this.store.select(selectProducts);
  loading$ = this.store.select(selectLoading);

  ngOnInit() {
    this.store.dispatch(ProductsActions.loadProducts());
    this.store.dispatch(ProductsActions.loadCategories()); // ✅
  }
}
