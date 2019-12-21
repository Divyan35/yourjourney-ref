import { Component, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/services/validation.service';
import { FlashMessagesService } from  'angular2-flash-messages';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  name:String;
  username:String;
  email:String;
  password:String;

  constructor(private ValidationService: ValidationService,
    private flashMessage:FlashMessagesService,
    private authenticationService:AuthenticationService,
    private router:Router) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    //console.log(this.name);
    const traveller = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    const traveller1 = {
      username: this.username,
      password: this.password
    }

  //Required fields
  if(!this.ValidationService.validateall(traveller)){
    this.flashMessage.show('Please fill in all fields',{cssClass: 'alert-danger',timeout:3000});
    return false;
  }

  //Validate email
  if(!this.ValidationService.validateEmail(traveller.email)){
    this.flashMessage.show('Please fill valid email',{cssClass:'alert-danger',timeout:3000});
    return false;
  }

  //Register user
  this.authenticationService.registerTraveller(traveller).subscribe(data=>{
    if(data.success){
      this.flashMessage.show('you are now registered and can log in',{cssClass:'alert-success',timeout:3000});
      
      this.authenticationService.authenticateTraveller(traveller1).subscribe(data=>{
        
        this.authenticationService.storeData(data.token,data.traveller1);
        this.flashMessage.show('You are now logged in',{
         cssClass: 'alert-success',
         timeout:2000});
        this.router.navigate(['travelportal']);
       }); 
    } 
    
    else {
      this.flashMessage.show('something went wrong',{cssClass:'alert-success',timeout:3000});
      this.router.navigate(['/register']);
    }
  });
 }
}
