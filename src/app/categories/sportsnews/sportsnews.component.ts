import { Component, OnInit } from '@angular/core';
import { FacilnewsapiservicesService } from '../../service/facilnewsapiservices.service';

@Component({
  selector: 'app-sportsnews',
  templateUrl: './sportsnews.component.html',
  styleUrls: ['./sportsnews.component.css']
})
export class SportsnewsComponent implements OnInit {

  constructor(private _services: FacilnewsapiservicesService) { }

  sportsnewsDisplay: any = [];

  ngOnInit(): void {
    this._services.sportsNews().subscribe((result) => {
      this.sportsnewsDisplay = result.articles;

    });
  }

}
