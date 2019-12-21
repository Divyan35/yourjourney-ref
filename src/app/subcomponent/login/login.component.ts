import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:String;
  password:String;

  constructor(private authenticationService:AuthenticationService,
    private router:Router,
    private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    const traveller = {
    username: this.username,
    password: this.password
  }

  this.authenticationService.authenticateTraveller(traveller).subscribe(data=>{
    if(data.success){
    this.authenticationService.storeData(data.token,data.traveller);
    this.flashMessage.show('You are now logged in',{
     cssClass: 'alert-success',
     timeout:2000});
    this.router.navigate(['travelportal']);
    }
    else 
    { 
     this.flashMessage.show(data.msg,{
       cssClass:'alert-danger',
       timeout:2000});
      this.router.navigate(['login']);
    }
   });
   }
  }

