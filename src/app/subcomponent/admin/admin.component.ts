import { Component, OnInit } from '@angular/core';
import { TraveltimeDataService } from 'src/app/services/traveltime-data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  source:String;
  destination:String;
  time:String;

  constructor(private traveltimeDataService : TraveltimeDataService) { }

  ngOnInit() {
  }

  Submittimedata()
  {
    const traveldata = {
      source: this.source,
      destination: this.destination,
      time: this.time
    }

    this.traveltimeDataService.travellingdata(traveldata).subscribe(data=>{
      if(data.success){
       console.log('data submitted');
      }
      else{
        console.error();
      }
         }); 

  }

}
