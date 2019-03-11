import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-vrv',
  templateUrl: './vrv.component.html',
  styleUrls: ['./vrv.component.css','../bootstrap.css']
})
export class VrvComponent implements OnInit {
vrv:any;
  constructor(public http:HttpClient) { }

  ngOnInit() {
    this.http.post('https://stark-lowlands-72624.herokuapp.com/vrvs',{}).subscribe((data:any)=>{
      this.vrv=data;
      console.log(this.vrv);
     })
  }
}
