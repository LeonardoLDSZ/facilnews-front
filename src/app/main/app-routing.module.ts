import { TechnewsComponent } from '../categories/technews/technews.component';
import { BusinessnewsComponent } from '../categories/businessnews/businessnews.component';
import { EntertainmentnewsComponent } from '../categories/entertainmentnews/entertainmentnews.component';
import { SciencenewsComponent } from '../categories/sciencenews/sciencenews.component';
import { SportsnewsComponent } from '../categories/sportsnews/sportsnews.component';
import { HealthnewsComponent } from '../categories/healthnews/healthnews.component';
import { GeneralnewsComponent } from '../categories/generalnews/generalnews.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:GeneralnewsComponent}, // Gerais
  {path:'saude',component:HealthnewsComponent}, // Saúde
  {path:'esportes',component:SportsnewsComponent}, // Esportes
  {path:'ciencia',component:SciencenewsComponent}, // Ciencia
  {path:'entretenimento',component:EntertainmentnewsComponent}, // Entretenimento
  {path:'negocios',component:BusinessnewsComponent}, // Negocios
  {path:'tecnologia',component:TechnewsComponent} // Tecnologia 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
