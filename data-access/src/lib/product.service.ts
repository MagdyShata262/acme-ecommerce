import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly API_URL = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_URL);
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.API_URL}/${id}`);
  }

  getByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API_URL}/category/${category}`);
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.API_URL}/categories`);
  }

// In your ProductService or component
getOptimizedImageUrl(imageUrl: string): string {
  return imageUrl.replace('_SL1500_', '_SL400_'); // or _SL300_, _SL200_
}





}
