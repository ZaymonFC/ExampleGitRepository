import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

// Service Imports
import { AppRoutingModule } from './services/app-routing.module'

// Component Imports
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { MenuComponent } from './menu/menu.component'
import { RouterModule, Routes } from '@angular/router'
import { CounterComponent } from './presentation/counter/counter.component';
import { ProductComponent } from './product/product.component';
import { CreateComponent } from './product/create/create.component';
import { UpdateComponent } from './product/update/update.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    MenuComponent,
    CounterComponent,
    ProductComponent,
    CreateComponent,
    UpdateComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
