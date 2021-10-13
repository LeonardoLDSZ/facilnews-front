import { SportsnewsComponent } from './sportsnews/sportsnews.component';
import { HealthnewsComponent } from './healthnews/healthnews.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:TopheadingComponent}, // Início
  {path:'saude',component:HealthnewsComponent}, // Saúde
  {path:'esportes',component:SportsnewsComponent}, // Esportes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
