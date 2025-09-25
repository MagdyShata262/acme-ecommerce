/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
@Component({
  selector: 'acme-ecommerce-all-products',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent {
  private route = inject(ActivatedRoute);

  category = this.route.snapshot.paramMap.get('category') || 'All';
}
