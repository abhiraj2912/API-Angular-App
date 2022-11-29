import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerDataComponent } from './passenger-data/passenger-data.component';
import { PublicDataComponent } from './public-data/public-data.component';
import { PublicAPIComponent } from './public-api/public-api.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { RouterModule, Routes } from '@angular/router';

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
  }

]

@NgModule({
  declarations: [
    AppComponent,
    PassengerDataComponent,
    PublicDataComponent,
    PublicAPIComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
