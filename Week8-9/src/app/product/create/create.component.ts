import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  // NG Model
  private name: string
  private description: string
  private price: number
  private type: string

  private statusMessage = ''
  private showError = false

  constructor(
    private router: Router,
    private service: ProductService
  ) { }

  ngOnInit() {
  }

  addProduct(event: Event) {
    event.preventDefault()

    if (!this.name || !this.description || !this.price || !this.type) {
      this.statusMessage = 'Please ensure all fields are correct'
      this.showError = true
      return
    }

    const product = {
      name: this.name,
      description: this.description,
      type: this.type,
      price: this.price
    }

    this.service.addProduct(product)
    this.router.navigate(['productView'])
  }
}
