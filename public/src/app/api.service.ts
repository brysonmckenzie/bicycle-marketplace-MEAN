import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs";


@Injectable()
export class ApiService {

  constructor(private _http: Http) { }

  register(user) {

  	return this._http.post('/api/register', user).map( data => data.json() ).toPromise();
  }

  loginUser(user) {
  	return this._http.post('/api/login', user).map( data => data.json() ).toPromise();
  }

  randomBike(){
    return this._http.get('/api/randbikes').map( data => data.json()).toPromise();
  }
  getBikes(){
    return this._http.get('/api/userBikes').map(data => data.json()).toPromise();
  }
  logout() {
    return this._http.get('/logout').map(data => data.json()).toPromise();
  }

  allBicycles(){
    return this._http.get('/api/allBikes').map(data => data.json()).toPromise();
  }

  currentUser() {
    return this._http.get('/currentUsers').map(data => data.json()).toPromise();
  }

  createBike(bike){
    return this._http.post('/api/newBikeListing', bike).map(data => data.json()).toPromise();
  }

  updateBike(bike) {
  	return this._http.put('/api/update/', bike._id).map( (response) => response.json()).toPromise()
  }

  deleteBike(bike) {
  	return this._http.delete('/api/deleteBike/',bike._id).map( (response) => response.json()).toPromise()
  }
  
}