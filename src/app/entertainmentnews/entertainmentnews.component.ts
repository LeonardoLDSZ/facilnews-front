import { Component, OnInit } from '@angular/core';
import {FacilnewsapiservicesService} from '../service/facilnewsapiservices.service';

@Component({
  selector: 'app-entertainmentnews',
  templateUrl: './entertainmentnews.component.html',
  styleUrls: ['./entertainmentnews.component.css']
})
export class EntertainmentnewsComponent implements OnInit {

  constructor(private _services:FacilnewsapiservicesService) { }

  entertainmentnewsDisplay: any = [];

  ngOnInit(): void {
    this._services.entertainmentNews().subscribe((result)=>{
      this.entertainmentnewsDisplay = result.articles;

    });

  }

}
