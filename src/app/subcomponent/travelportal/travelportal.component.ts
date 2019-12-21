import { Component, OnInit, OnChanges,SimpleChanges } from '@angular/core';
//import { traveltimeObj } from 'src/app/traveltime';
import { TraveltimeDataService } from 'src/app/services/traveltime-data.service';
import { DataSource } from '@angular/cdk/collections';

import { traveltimeObj } from '../../traveltime';
import { filter ,map} from 'rxjs/operators';
import 'rxjs/add/operator/filter';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-travelportal',
  templateUrl: './travelportal.component.html',
  styleUrls: ['./travelportal.component.css']
})

export class TravelportalComponent implements OnInit,OnChanges {
  Traveltime : traveltimeObj[]=[];
  Filtime: traveltimeObj[]=[];
  source: String;
  destination: String;
  displayedColumns = ['source','destination','time'];

  dataRefresher: any;

  ngOnChanges(changes:SimpleChanges){

  }

  constructor(private traveltimeDataService : TraveltimeDataService,
    private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }

  getdata(){
   // if(this.source == 'mumbai' && this.destination == 'pune')
    //{
    this.traveltimeDataService.gettravellingdata()
    .subscribe(traveltime => {
      this.Traveltime=traveltime;
      for(let item of this.Traveltime) {
        //console.log(item.source);
        if(item.source == this.source && item.destination == this.destination)
        {
        this.Filtime.push(item);
        }
        else
        {
          //console.log('enter cities');
        }
      }
      });
    //}

    //else if(this.source == 'pune' && this.destination == 'mumbai')
    //{
    //  this.traveltimeDataService.gettravellingdata()
     // .subscribe(traveltime => {
     // this.Traveltime=traveltime;
     // for(let item of this.Traveltime) {
     //   console.log(item.source);
    //    if(item.source == 'pune')
     //   {
     //   this.Filtime.push(item);
    //    }
    //    else
    //    {
     //   console.log("entered source is not pune");
    //    }
    //  }
    //  });
   // }
    
    //else
     //{
     // this.flashMessage.show('sorry for inconvience,entered data is not available in our journey database',{
     //   cssClass: 'alert-success',
     //   timeout:5000});
     // }
}

//for deleting rows in table
deleteRow(){
  for(let i = 0; i <= this.Filtime.length; i++){
          this.Filtime.splice(0);
  }
}

deleteIssue(id)
{
      this.traveltimeDataService.deletedata(id)
      .subscribe(data =>{
        console.log(data);
        if(data.n == 1){
          for(var i=0; i<this.Filtime.length; i++){
            if(id == this.Filtime[i]._id){
              this.Filtime.splice(i,1);
            }
          }
        }
      });
}

Submitdata(){
    this.deleteRow();
    this.getdata();
  }
}


