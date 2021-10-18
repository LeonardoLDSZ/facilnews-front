// import { GeneralnewsComponent } from '../generalnews/generalnews.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacilnewsapiservicesService {

  constructor(private _http:HttpClient) { }

  generalApiUrl = "https://newsapi.org/v2/top-headlines?country=br&category=general&apiKey=851fa8c3ac3544d382152d6ea735c152";
  
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

  //------------------------Noticias Locais - API URL------------------------------
  //Blog do Jaime
 localapiurl = "https://newsapi.org/v2/domains=blogdojaime.com.br&apiKey=851fa8c3ac3544d382152d6ea735c152";

  //O municipio Blumenau
 localomunicipioapiurl = "https://newsapi.org/v2/domains=omunicipioblumenau.com.br&apiKey=851fa8c3ac3544d382152d6ea735c152";

 //Oblumenauense
 localoblumenauensepiurl = "https://newsapi.org/v2/domains=oblumenauense.com.br&apiKey=851fa8c3ac3544d382152d6ea735c152";

 //Informe Blumenau
 localinformeblumenaupiurl = "https://newsapi.org/v2/domains=informeblumenau.com&apiKey=851fa8c3ac3544d382152d6ea735c152";

 //Jornal de Blumenau
 localjornaldeblumenaupiurl = "https://newsapi.org/v2/domains=jornaldeblumenau.com.br&apiKey=851fa8c3ac3544d382152d6ea735c152";

 //NSC TOTAL
 localnsctotalurl = "https://newsapi.org/v2/domains=nsctotal.com.br/santa&apiKey=851fa8c3ac3544d382152d6ea735c152";

 //NDMAIS
 localndmaisiurl = "https://newsapi.org/v2/domains=ndmais.com.br/blumenau/&apiKey=851fa8c3ac3544d382152d6ea735c152";

 //Farol Blumenau
 localfarolblumenauiurl = "https://newsapi.org/v2/domains=farolblumenau.com/amp/&apiKey=851fa8c3ac3544d382152d6ea735c152";

 //Alexandre José
 localalexandrejoseurl = "https://newsapi.org/v2/domains=alexandrejose.com&apiKey=851fa8c3ac3544d382152d6ea735c152";

 

   

  


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

    //localnews()
    localNews():Observable<any>
    {
      return this._http.get(this.localapiurl);
      return this._http.get(this.localomunicipioapiurl);
      return this._http.get(this.localoblumenauensepiurl);
      return this._http.get(this.localinformeblumenaupiurl);
      return this._http.get(this.localjornaldeblumenaupiurl);
      return this._http.get(this.localnsctotalurl);
      return this._http.get(this.localndmaisiurl);
      return this._http.get(this.localfarolblumenauiurl);
      return this._http.get(this.localalexandrejoseurl);

    }

    
     


 

}
