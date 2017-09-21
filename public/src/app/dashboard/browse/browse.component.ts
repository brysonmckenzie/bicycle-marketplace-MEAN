import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "./../../api.service";

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  allBikes = {}

  constructor(private _apiService: ApiService, private _router: Router) { }

  ngOnInit() {
    this._apiService.allBicycles().then( bikes => {this.allBikes = bikes});
  }
  
  
  
}
