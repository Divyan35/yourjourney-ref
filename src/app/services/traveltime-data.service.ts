import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import {environment} from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class TraveltimeDataService {

  traveldata:any;
  //apiURL = `${process.env.BASE_URL}` || 'http://localhost:3000/';
  apiURL = environment.apiUrl;

  constructor(private http: Http) { }

  gettravellingdata(){
    return this.http.get(this.apiURL + '/traveller/gettime').pipe(
    map(res => res.json()));
  }

  travellingdata(traveldata){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post( this.apiURL + '/traveller/traveldata',traveldata,{headers:headers}).pipe(
    map(res => res.json()));
  }

  deletedata(id){
    return this.http.delete(this.apiURL + '/traveller/traveldelete/'+id).pipe(
    map(res => res.json()));
  }
}
