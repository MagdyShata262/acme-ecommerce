import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NavComponent } from './nav/nav.component';
import { Store } from '@ngrx/store';
import { selectProducts, selectLoading } from './products/products.selectors';
import { AsyncPipe, CommonModule } from '@angular/common';
import * as ProductsActions from './products/products.actions';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, NavComponent, AsyncPipe,CommonModule],
  selector: 'acme-ecommerce-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'acme-ecommerce';

  private store = inject(Store);
  products$ = this.store.select(selectProducts);
  loading$ = this.store.select(selectLoading);

  ngOnInit() {
    this.store.dispatch(ProductsActions.loadProducts());
     // Debug
  this.products$.subscribe(products => {
    console.log('Products:', products);
  });
  this.loading$.subscribe(loading => {
    console.log('Loading:', loading);
  });
  }

}
