import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-roof',
  templateUrl: './roof.component.html',
  styleUrls: ['./roof.component.css','../bootstrap.css']
})
export class RoofComponent implements OnInit {
  roof:any;
  constructor(public http:HttpClient) { }

  ngOnInit() {
    this.http.post('http://localhost:8082/roofs',{}).subscribe((data:any)=>{
      this.roof=data;
      console.log(this.roof);
     })
  }

}
