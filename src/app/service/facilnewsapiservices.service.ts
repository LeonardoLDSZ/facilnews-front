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

}
