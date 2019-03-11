import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-air',
  templateUrl: './air.component.html',
  styleUrls: ['./air.component.css']
})
export class AirComponent implements OnInit {
  air:any;
 
  constructor(public http:HttpClient) { }
  

  ngOnInit() {
     this.http.post('http://localhost:8082/airs',{}).subscribe((data:any)=>{
     this.air=data;
     console.log(this.air);
    })
  }
}
