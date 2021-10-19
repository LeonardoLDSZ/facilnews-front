import { Component, OnInit } from '@angular/core';
import { FacilnewsapiservicesService } from '../service/facilnewsapiservices.service';

@Component({
  selector: 'app-blumenaunews',
  templateUrl: './blumenaunews.component.html',
  styleUrls: ['./blumenaunews.component.css']
})
export class BlumenaunewsComponent implements OnInit {

  constructor(private _services:FacilnewsapiservicesService) { }

  blumenaunewsDisplay: any = []

  ngOnInit(): void {
    this._services.blumenauNews().subscribe((result)=>{
      this.blumenaunewsDisplay = result.articles;
    });
  }
  

}
