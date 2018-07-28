import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRouteModule } from './app.route-module';
import { MedicModule } from './medics/medics.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouteModule,
    MedicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
