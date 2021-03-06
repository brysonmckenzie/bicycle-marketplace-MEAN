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
  curr = {};

  constructor(private _apiService: ApiService, private _router: Router) { }

  ngOnInit() {
    this._apiService.allBicycles().then( bikes => {this.allBikes = bikes});

    this._apiService.currentUser()
    .then( user => { 
      this.curr = user
      console.log(user._id)
    })
    .catch((err) => { console.log(err)})
  }


  
  
}
