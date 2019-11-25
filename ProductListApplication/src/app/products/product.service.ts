import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl: string = 'api/products/products.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getProductById(id: number): Observable<IProduct> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      map((products: IProduct[]) => products.find(p => p.productId === id))
    );
  }

  handleError(handleError: any): import("rxjs").OperatorFunction<IProduct[], any> {
    throw new Error("Method not implemented.");
  }
}
