import { Component, OnInit } from '@angular/core';
import {FacilnewsapiservicesService} from '../../service/facilnewsapiservices.service';

@Component({
  selector: 'app-healthnews',
  templateUrl: './healthnews.component.html',
  styleUrls: ['./healthnews.component.css']
})
export class HealthnewsComponent implements OnInit {

  constructor(private _services:FacilnewsapiservicesService) { }
  
  healthnewsDisplay:any = [];

  ngOnInit(): void {

    this._services.healthNews().subscribe((result)=>{
      this.healthnewsDisplay = result.articles;

    });
  }

}
