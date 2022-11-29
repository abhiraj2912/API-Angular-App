import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-passenger-data',
  templateUrl: './passenger-data.component.html',
  styleUrls: ['./passenger-data.component.css']
})
export class PassengerDataComponent {

  constructor(private api:ApiService){
    api.fetchPasseneger().subscribe(
      (response)=>{
        this.passenger=response
      }
    )
  }

  passenger:any=[]

}
