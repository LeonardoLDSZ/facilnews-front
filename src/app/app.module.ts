import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { HttpClientModule } from '@angular/common/http';
import { FacilnewsapiservicesService } from './service/facilnewsapiservices.service';
import { HealthnewsComponent } from './healthnews/healthnews.component';
import { SportsnewsComponent } from './sportsnews/sportsnews.component';
import { SciencenewsComponent } from './sciencenews/sciencenews.component';
import { EntertainmentnewsComponent } from './entertainmentnews/entertainmentnews.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { TechnewsComponent } from './technews/technews.component';



// import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';



@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
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
