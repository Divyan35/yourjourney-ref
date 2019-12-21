
import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import { HttpModule } from '@angular/http';
import { HttpClient,HttpHeaders} from '@angular/common/http';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { tokenNotExpired } from 'angular2-jwt';
//import { JwtModule } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
//import {Observable} from "rxjs";
//import {Observable} from rxjs/Observable;
import {environment} from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticateToken: any;
  traveller: any;
  apiURL :any;

  constructor(private http:Http, private httpClient:HttpClient) {
    this.apiURL=environment.apiUrl;
   }

  registerTraveller(traveller){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post(this.apiURL + '/traveller/register',traveller,{headers:headers}).pipe
      (map(res => res.json()));
  }

  authenticateTraveller(traveller){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post(this.apiURL+'/traveller/authenticate',traveller,{headers:headers}).pipe
      (map(res => res.json()));
  }

  getInfo():any{
    this.getToken();
    let headers = new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': this.authenticateToken});
    //const headers = new Headers();
    //this.loadToken();
    //headers.append('Content-Type','application/json');
    //headers.append('Authorization',this.authToken);
    return this.httpClient.get(this.apiURL + '/traveller/travellerinfo',{headers:headers});
  }

  storeData(token, traveller){
    localStorage.setItem('id_token', token);
    localStorage.setItem('traveller', JSON.stringify(traveller));
    this.authenticateToken = token;
    this.traveller = traveller;
  }

  getToken(){
    const token = localStorage.getItem('id_token');
    this.authenticateToken = token;
  }

  login(){
    return tokenNotExpired('id_token');
  }

  logout(){
    this.authenticateToken = null;
    this.traveller = null;
    localStorage.clear();
  }
}