import { Component, OnInit } from '@angular/core';
import { FacilnewsapiservicesService } from '../../service/facilnewsapiservices.service';

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent implements OnInit {

  constructor(private _services:FacilnewsapiservicesService) { }

  businessnewsDisplay: any = [];

  ngOnInit(): void {
    this._services.businessNews().subscribe((result)=>{
      this.businessnewsDisplay = result.articles;
    });
  }

}
