import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-public-api',
  templateUrl: './public-api.component.html',
  styleUrls: ['./public-api.component.css']
})
export class PublicAPIComponent {

  constructor(api:ApiService){
    api.fetchPublicApi().subscribe(
      (response)=>{
        this.publicdata=response

      }
    )
  }

  publicdata:any=[]

}
