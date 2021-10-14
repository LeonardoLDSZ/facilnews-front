import { TechnewsComponent } from './technews/technews.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { EntertainmentnewsComponent } from './entertainmentnews/entertainmentnews.component';
import { SciencenewsComponent } from './sciencenews/sciencenews.component';
import { SportsnewsComponent } from './sportsnews/sportsnews.component';
import { HealthnewsComponent } from './healthnews/healthnews.component';
import { GeneralnewsComponent } from './generalnews/generalnews.component';
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
