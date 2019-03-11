import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-split',
  templateUrl: './split.component.html',
  styleUrls: ['./split.component.css','../bootstrap.css']
})
export class SplitComponent implements OnInit {

  split:any;
  constructor(public http:HttpClient) { }

  ngOnInit() {
    this.http.post('https://stark-lowlands-72624.herokuapp.com/splits',{}).subscribe((data:any)=>{
     this.split=data;
     console.log(this.split);
    })
  
  }

}
