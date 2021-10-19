import { Component, OnInit } from '@angular/core';
import { FacilnewsapiservicesService } from '../service/facilnewsapiservices.service';

@Component({
  selector: 'app-santacatarinanews',
  templateUrl: './santacatarinanews.component.html',
  styleUrls: ['./santacatarinanews.component.css']
})
export class SantacatarinanewsComponent implements OnInit {

  constructor(private _services:FacilnewsapiservicesService) { }

  santacatarinanewsDisplay: any = []

  ngOnInit(): void {
    this._services.santacatarinaNews().subscribe((result)=>{
      this.santacatarinanewsDisplay = result.articles;
    });
  }

}
