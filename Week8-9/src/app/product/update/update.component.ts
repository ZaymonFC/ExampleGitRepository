import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  // NG Model
  private name: string
  private description: string
  private price: number
  private type: string

  private product: Product

  private error = ''
  private showError = false

  constructor(
    private service: ProductService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.service.getProduct(this.route.snapshot.paramMap.get('id'))
      .subscribe((data: Product) => {
        this.product = data
        console.log(data)
      })
  }

  updateProduct(event: Event) {
    event.preventDefault()

    this.service.updateProduct({
      _id: this.product._id,
      name: this.name,
      description: this.description,
      type: this.type,
      price: this.price,
    })

    this.leave()
  }

  delete(id: string) {
    this.service.deleteProduct(id)
    this.leave()
  }

  leave() {
    this.router.navigate(['productView'])
  }

}
