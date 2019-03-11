import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-cassette',
  templateUrl: './cassette.component.html',
  styleUrls: ['./cassette.component.css']
})
export class CassetteComponent implements OnInit {
  cass:any;
  constructor(public http:HttpClient) { }

  ngOnInit() {
    this.http.post('https://stark-lowlands-72624.herokuapp.com/cassettes',{}).subscribe((data:any)=>{
      this.cass=data;
      console.log(this.cass);
     })
  }

}
