import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-chillers',
  templateUrl: './chillers.component.html',
  styleUrls: ['./chillers.component.css','../bootstrap.css']
})
export class ChillersComponent implements OnInit {
chiller:any;
  constructor(public http:HttpClient) { }

  ngOnInit() {
    this.http.post('https://stark-lowlands-72624.herokuapp.com/chillers',{}).subscribe((data:any)=>{
      this.chiller=data;
      console.log(this.chiller);
     })
  }

}
