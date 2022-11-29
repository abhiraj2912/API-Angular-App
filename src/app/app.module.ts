import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerDataComponent } from './passenger-data/passenger-data.component';
import { PublicDataComponent } from './public-data/public-data.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengerDataComponent,
    PublicDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
