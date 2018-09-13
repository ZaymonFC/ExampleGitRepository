import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Product } from 'src/app/types/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly routeUrl = environment.API_URL + '/product'

  constructor(
    private http: HttpClient
    ) { }

    getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(this.routeUrl)
    }

    addProduct(product: { name: string; description: string; type: string; price: number; }): void {
      this.http.post(this.routeUrl, product)
        .subscribe(data => {
          console.log(data)
        })
    }

    updateProduct(product: { _id: string; name: string; description: string; type: string; price: number; }): void {
      this.http.patch(this.routeUrl + '/' + product._id, product)
        .subscribe(data => {
          console.log(data)
        })
    }

    deleteProduct(id): void {
      this.http.delete(this.routeUrl + '/' + id)
        .subscribe(data => {
          console.log(data)
        })
    }

    getProduct(id: string): Observable<Product> {
      return this.http.get<Product>(this.routeUrl + '/' + id)
    }
}
