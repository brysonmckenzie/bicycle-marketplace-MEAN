import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "./../api.service";
import { User } from "../user";
import { Bicycle } from './../bicycle';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  bikes: Array <any> =[];

  @Output() logout_event = new EventEmitter();
 

  constructor(private _apiService: ApiService, private _router: Router) { }
  
    ngOnInit() {
      this._apiService.currentUser()
      .then(user => {})
      .catch(err => {this._router.navigate(['']);
      console.log(User)
    });
    
    }

  
    logout() {
      this._apiService.logout()
      .then(() => { this._router.navigate(['']) })
      .catch((err) => { console.log(err); });
    }
  
    
  }

  





