import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AsyncPipe, CommonModule, NgFor, NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectCategories } from '../products/products.selectors';
import * as ProductsActions from '../products/products.actions';
@Component({
  selector: 'acme-ecommerce-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    NgIf,
    CommonModule,
    NgFor,
  ],
})
export class NavComponent {
  private breakpointObserver = inject(BreakpointObserver);
  private store = inject(Store);
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  categories$ = this.store.select(selectCategories);
  ngOnInit() {
    this.store.dispatch(ProductsActions.loadCategories());
  }
}
