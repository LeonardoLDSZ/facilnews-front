import { FacilnewsapiservicesService } from '../service/facilnewsapiservices.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sciencenews',
  templateUrl: './sciencenews.component.html',
  styleUrls: ['./sciencenews.component.css']
})
export class SciencenewsComponent implements OnInit {

  constructor(private _services:FacilnewsapiservicesService) { }

  sciencenewsDisplay: any = [];

  ngOnInit(): void {

    this._services.scienceNews().subscribe((result)=>{
      this.sciencenewsDisplay = result.articles;

    });
  }

}
