import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router'
import { AppRoutes } from './routes'


// Component Imports
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';

// const routes = AppRoutes()
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'chat', component: ChatComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
