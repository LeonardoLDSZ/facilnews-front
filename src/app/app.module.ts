import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralnewsComponent } from './generalnews/generalnews.component';
import { HttpClientModule } from '@angular/common/http';
import { FacilnewsapiservicesService } from './service/facilnewsapiservices.service';
import { HealthnewsComponent } from './healthnews/healthnews.component';
import { SportsnewsComponent } from './sportsnews/sportsnews.component';
import { SciencenewsComponent } from './sciencenews/sciencenews.component';
import { EntertainmentnewsComponent } from './entertainmentnews/entertainmentnews.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { TechnewsComponent } from './technews/technews.component';
import { BlumenaunewsComponent } from './blumenaunews/blumenaunews.component';
import { SantacatarinanewsComponent } from './santacatarinanews/santacatarinanews.component';



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
    BlumenaunewsComponent,
    SantacatarinanewsComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [FacilnewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
