
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { RouteSegment,RouteTree } from 'angular-route-segment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authenticationService:AuthenticationService,
    private router: Router,
    private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }

  routerOnActivate(curr: RouteSegment, prev?: RouteSegment, currTree?: RouteTree, prevTree?: RouteTree) : void {
    this.router.navigate(['/home'], curr);
  }

  onLogoutClick()
    {
      this.authenticationService.logout();
      this.flashMessage.show('You are logged out',{
        cssClass:'alert-success',
        timeout:2000
      });
      this.router.navigate(['login']);
      return false;
    }
}
