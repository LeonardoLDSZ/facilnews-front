import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralnewsComponent } from '../categories/generalnews/generalnews.component';
import { HttpClientModule } from '@angular/common/http';
import { FacilnewsapiservicesService } from '../service/facilnewsapiservices.service';
import { HealthnewsComponent } from '../categories/healthnews/healthnews.component';
import { SportsnewsComponent } from '../categories/sportsnews/sportsnews.component';
import { SciencenewsComponent } from '../categories/sciencenews/sciencenews.component';
import { EntertainmentnewsComponent } from '../categories/entertainmentnews/entertainmentnews.component';
import { BusinessnewsComponent } from '../categories/businessnews/businessnews.component';
import { TechnewsComponent } from '../categories/technews/technews.component';
// import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@NgModule({
  declarations: [
    AppComponent,
    GeneralnewsComponent,
    HealthnewsComponent,
    SportsnewsComponent,
    SciencenewsComponent,
    EntertainmentnewsComponent,
    BusinessnewsComponent,
    TechnewsComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // LoadingBarHttpClientModule  
    
  ],
  providers: [FacilnewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
