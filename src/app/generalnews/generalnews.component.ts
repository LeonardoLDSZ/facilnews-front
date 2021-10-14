import { Component, OnInit } from '@angular/core';
import { FacilnewsapiservicesService } from '../service/facilnewsapiservices.service';


@Component({
  selector: 'app-generalnews',
  templateUrl: './generalnews.component.html',
  styleUrls: ['./generalnews.component.css']
  
})

export class GeneralnewsComponent implements OnInit {

  constructor(private _services:FacilnewsapiservicesService) { }
  
  generalnewsDisplay:any = [];

  ngOnInit(): void {

    this._services.generalNews().subscribe((result)=>{
      console.log(result);
      this.generalnewsDisplay = result.articles;
      
    })
  }

}
