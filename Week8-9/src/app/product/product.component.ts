import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from 'src/app/types/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Product[]

  private search: string

  constructor(
    private service: ProductService,
    private router: Router
  ) {  }

  ngOnInit() {
    this.service.getProducts()
      .subscribe((data: Product[]) => {
        this.products = data
        console.log(data)
      })
  }

  searchProducts(event: Event) {
    event.preventDefault()
    console.log('Searching for: ', this.search)

    // this.service.search(this.search)
  }

  addProduct() {
    this.router.navigate(['createProduct'])
  }

  updateProduct(id: string) {
    this.router.navigate(['updateProduct', id])
  }
}
