import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "./../../api.service"
import { Bicycle } from './../../bicycle';
import { User } from './../../user';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  userBikes = {}
  
  bicycle = new Bicycle();

  constructor(private _apiService: ApiService, private _router: Router) { }

  ngOnInit() {
    this._apiService.getBikes()
    .then( bikes => {this.userBikes = bikes});

    this._apiService.currentUser()
    .then(user => {})
    .catch(err => {this._router.navigate(['']);
    console.log(User)
  });
  
  };

  newBike(){
    this._apiService.createBike(this.bicycle)
    .then( bike => { this._router.navigate(['/dashboard/browse']) })
    .catch((err) => console.log(err));
  }
}
