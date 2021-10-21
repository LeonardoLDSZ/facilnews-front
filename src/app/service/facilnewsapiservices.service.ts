import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacilnewsapiservicesService {

  constructor(private _http:HttpClient) { }

  generalApiUrl ="https://newsapi.org/v2/top-headlines?country=br&category=general&apiKey=06c8aa6bd8a4419183f52181862cada6"; 
  
  //Saúde - API URL
  saudeapiurl ="https://newsapi.org/v2/top-headlines?country=br&category=health&apiKey=06c8aa6bd8a4419183f52181862cada6"; 

  //Esportes - API URL
  sportsapiurl ="https://newsapi.org/v2/top-headlines?country=br&category=sports&apiKey=06c8aa6bd8a4419183f52181862cada6"; 

  //Ciência - API URL
  scienceapiurl ="https://newsapi.org/v2/top-headlines?country=br&category=science&apiKey=06c8aa6bd8a4419183f52181862cada6"; 

  //Entretenimento - API URL
  entertainmentapiurl ="https://newsapi.org/v2/top-headlines?country=br&category=entertainment&apiKey=06c8aa6bd8a4419183f52181862cada6"; 

  //Negocios - API URL
  businessapiurl ="https://newsapi.org/v2/top-headlines?country=br&category=business&apiKey=06c8aa6bd8a4419183f52181862cada6";

  //Tecnologia - API URL
  techapiurl ="https://newsapi.org/v2/top-headlines?country=br&category=technology&apiKey=06c8aa6bd8a4419183f52181862cada6";

  //------------------------Noticias Blumenau e Santa Catarina - API URL------------------------------

  blumenauapiurl ="https://newsapi.org/v2/everything?q=Blumenau&from=2021-10-15&sortBy=publishedAt&apiKey=06c8aa6bd8a4419183f52181862cada6";
  
  santacatarinaapiurl ="https://newsapi.org/v2/everything?q=Santa catarina&from=2021-10-15&sortBy=publishedAt&apiKey=06c8aa6bd8a4419183f52181862cada6";
 
  //generaNews()
  generalNews():Observable<any>
  {
    return this._http.get(this.generalApiUrl);
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

    //blumenaunews()
    blumenauNews():Observable<any>
    {
      return this._http.get(this.blumenauapiurl);
    }

    //santacatarinanews()
    santacatarinaNews():Observable<any>
    {
      return this._http.get(this.santacatarinaapiurl)
    }
     
}
