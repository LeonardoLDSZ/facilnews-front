import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacilnewsapiservicesService {

  constructor(private _http:HttpClient) { }

  generalApiUrl ="https://newsapi.org/v2/top-headlines?country=br&category=general&apiKey=0732789e89e74ad2afa85c727ffa6efa";
  
  //Saúde - API URL
  saudeapiurl ="https://newsapi.org/v2/top-headlines?country=br&category=health&apiKey=0732789e89e74ad2afa85c727ffa6efa";

  //Esportes - API URL
  sportsapiurl ="https://newsapi.org/v2/top-headlines?country=br&category=sports&apiKey=0732789e89e74ad2afa85c727ffa6efa";

  //Ciência - API URL
  scienceapiurl ="https://newsapi.org/v2/top-headlines?country=br&category=science&apiKey=0732789e89e74ad2afa85c727ffa6efa";

  //Entretenimento - API URL
  entertainmentapiurl ="https://newsapi.org/v2/top-headlines?country=br&category=entertainment&apiKey=0732789e89e74ad2afa85c727ffa6efa";

  //Negocios - API URL
  businessapiurl ="https://newsapi.org/v2/top-headlines?country=br&category=business&apiKey=0732789e89e74ad2afa85c727ffa6efa";

  //Tecnologia - API URL
  techapiurl ="https://newsapi.org/v2/top-headlines?country=br&category=technology&apiKey=0732789e89e74ad2afa85c727ffa6efa";

  //------------------------Noticias Blumenau e Santa Catarina - API URL------------------------------

  blumenauapiurl ="https://newsapi.org/v2/everything?q=blumenau&from=2021-10-10&sortBy=publishedAt&apiKey=0732789e89e74ad2afa85c727ffa6efa";
  
  santacatarinaapiurl ="https://newsapi.org/v2/everything?q=santa catarina&from=2021-10-10&sortBy=publishedAt&apiKey=0732789e89e74ad2afa85c727ffa6efa";


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
