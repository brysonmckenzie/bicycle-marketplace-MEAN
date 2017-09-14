import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { User } from "../user";
import { Bicycle } from './../bicycle';
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  log = new User();
  reg = new User();
  random: Bicycle = new Bicycle()

  constructor(private _apiService: ApiService, private _router: Router) {
    this._apiService.randomBike()
    .then((bikes) => {this.random = bikes})
    .catch((err) => { console.log(err)});
  }

  ngOnInit() { 
    }



  login(log){
    this._apiService.loginUser(this.log)
    .then((user => { this._router.navigate(['/dashboard/browse']) }))
    .catch(err => console.log(err));
    
    }


  createUser(){
    this._apiService.register(this.reg)
    .then((user =>  { this._router.navigate(['/dashboard/browse']) }))
    .catch(err => console.log(err));
  }
}
