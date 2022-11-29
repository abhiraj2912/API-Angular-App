import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerDataComponent } from './passenger-data/passenger-data.component';
import { PublicDataComponent } from './public-data/public-data.component';
import { PublicAPIComponent } from './public-api/public-api.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { UserDataComponent } from './user-data/user-data.component';
import { TodoComponent } from './todo/todo.component';
import { QuotesComponent } from './quotes/quotes.component';

const myroute:Routes=[
  {
    path:"",
    component:PassengerDataComponent
  },
  {
    path:"api",
    component:PublicAPIComponent
  },
  {
    path:"publicdata",
    component:PublicDataComponent
  },
  {
    path:"userinfo",
    component:UserInfoComponent
  },
  {
    path:"products",
    component:ProductListComponent
  },
  {
    path:"userdata",
    component:UserDataComponent
  },
  {
    path:"todo",
    component:TodoComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    PassengerDataComponent,
    PublicDataComponent,
    PublicAPIComponent,
    UserInfoComponent,
    ProductListComponent,
    UserDataComponent,
    TodoComponent,
    QuotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
