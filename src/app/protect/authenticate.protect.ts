import {Injectable} from '@angular/core';
import {Router,CanActivate} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
//import { Observable } from 'rxjs/Observable';
import { userInfo } from 'os';

@Injectable()
export class Authenticate implements CanActivate{
    constructor(private authenticateService : AuthenticationService ,private router:Router){
}

canActivate(){
    if(this.authenticateService.login()){
        return true;
    } else {
        this.router.navigate(['/login']);
        return false;
    }
}
}