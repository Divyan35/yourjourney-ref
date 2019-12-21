import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  validateall(traveller){
    if(traveller.name == undefined || traveller.email == undefined || traveller.username == undefined || traveller.password == undefined)
    {
    return false;
    } else{
      return true;
    }
  }

  validateEmail(email){
    var check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return check.test(email);
  }
}