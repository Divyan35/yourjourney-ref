
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './subcomponent/home/home.component';
import { NavbarComponent } from './subcomponent/navbar/navbar.component';
import { RegistrationComponent } from './subcomponent/registration/registration.component';
import { LoginComponent } from './subcomponent/login/login.component';
import { TravelportalComponent } from './subcomponent/travelportal/travelportal.component';


import { Authenticate } from './protect/authenticate.protect';
import { AuthenticationService } from './services/authentication.service';
import { ValidationService } from './services/validation.service';
import { TraveltimeDataService } from './services/traveltime-data.service';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { SliderModule } from 'angular-image-slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { NgImageSliderModule } from 'ng-image-slider';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule ,MatOptionModule,MatDividerModule, 
  MatSnackBarModule} from '@angular/material';
import { AdminComponent } from './subcomponent/admin/admin.component';

const travelRoutes : Routes = [
  {path: '', redirectTo: "/home", pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'registration', component: RegistrationComponent},
  {path:'login', component: LoginComponent},
  {path:'admin', component: AdminComponent},
  {path:'travelportal', component: TravelportalComponent, canActivate:[Authenticate]},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RegistrationComponent,
    LoginComponent,
    TravelportalComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(travelRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    //FlashMessagesModule,
    BrowserAnimationsModule,
    SliderModule,
    SlickCarouselModule,
    NgbModule,
    MatToolbarModule,
    HttpClientModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatOptionModule, 
    MatSelectModule, 
    MatIconModule, 
    MatButtonModule, 
    MatCardModule, 
    MatTableModule, 
    MatDividerModule, 
    MatSnackBarModule,
    MatListModule,
    MatTabsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [Authenticate,AuthenticationService,ValidationService,TraveltimeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
