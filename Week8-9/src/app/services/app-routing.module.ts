import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'

// Component Imports
import { HomeComponent } from '../home/home.component'
import { NotFoundComponent } from '../not-found/not-found.component'
import { ProductComponent } from '../product/product.component';
import { CreateComponent } from '../product/create/create.component';
import { UpdateComponent } from '../product/update/update.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '404', component: NotFoundComponent },
  { path: 'productView', component: ProductComponent },
  { path: 'createProduct', component: CreateComponent},
  { path: 'updateProduct/:id', component: UpdateComponent},
  { path: '**', redirectTo: '404'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
