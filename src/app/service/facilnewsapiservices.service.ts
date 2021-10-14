import { TopheadingComponent } from './../topheading/topheading.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacilnewsapiservicesService {

  constructor(private _http:HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=br&apiKey=851fa8c3ac3544d382152d6ea735c152";
  
  //Saúde - API URL
  saudeapiurl = "https://newsapi.org/v2/top-headlines?country=br&category=health&apiKey=851fa8c3ac3544d382152d6ea735c152";

  //Esportes - API URL
  sportsapiurl = "https://newsapi.org/v2/top-headlines?country=br&category=sports&apiKey=851fa8c3ac3544d382152d6ea735c152";

  //Ciência - API URL
  scienceapiurl = "https://newsapi.org/v2/top-headlines?country=br&category=science&apiKey=851fa8c3ac3544d382152d6ea735c152";

  //Entretenimento - API URL
  entertainmentapiurl = "https://newsapi.org/v2/top-headlines?country=br&category=entertainment&apiKey=851fa8c3ac3544d382152d6ea735c152";

  //Negocios - API URL
  businessapiurl = "https://newsapi.org/v2/top-headlines?country=br&category=business&apiKey=851fa8c3ac3544d382152d6ea735c152";

  //Tecnologia - API URL
  techapiurl = "https://newsapi.org/v2/top-headlines?country=br&category=technology&apiKey=851fa8c3ac3544d382152d6ea735c152";

  //Noticias Gerais - API URL
  generalapiurl = "https://newsapi.org/v2/top-headlines?country=br&category=general&apiKey=851fa8c3ac3544d382152d6ea735c152";

   

  


  //topHeading()
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }

  //saudenews()
  healthNews():Observable<any>
  {
    return this._http.get(this.saudeapiurl);
  }

  //sportsnews()
  sportsNews():Observable<any>
  {
    return this._http.get(this.sportsapiurl);
  }

   //sciencenews()
   scienceNews():Observable<any>
   {
     return this._http.get(this.scienceapiurl);
   }

   //entertainmentnews()
   entertainmentNews():Observable<any>
   {
     return this._http.get(this.entertainmentapiurl);
   }

   //businessnews()
   businessNews():Observable<any>
   {
     return this._http.get(this.businessapiurl);
   }

    //technews()
    techNews():Observable<any>
    {
      return this._http.get(this.techapiurl);
    }

    
     


 

}
