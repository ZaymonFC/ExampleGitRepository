import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'

import { RouterModule, Routes } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MenuComponent } from './menu/menu.component';
import { AccountComponent } from './account/account.component'

// Configure Routes
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'account', component: AccountComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent,
    MenuComponent,
    AccountComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
