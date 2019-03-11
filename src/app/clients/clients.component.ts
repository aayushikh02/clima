import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css','../bootstrap.css']
})
export class ClientsComponent implements OnInit {
  cli:any;
  no=[1,2];
  constructor(public http:HttpClient) { }

  ngOnInit() {
    this.http.post('https://stark-lowlands-72624.herokuapp.com/clients',{}).subscribe((data:any)=>{
     this.cli=data;
    })
  }
}
