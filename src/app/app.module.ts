import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { HttpClientModule } from '@angular/common/http';
import { FacilnewsapiservicesService } from './service/facilnewsapiservices.service';

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FacilnewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
