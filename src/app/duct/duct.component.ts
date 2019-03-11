import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-duct',
  templateUrl: './duct.component.html',
  styleUrls: ['./duct.component.css','../bootstrap.css']
})
export class DuctComponent implements OnInit {
duct:any;
  constructor(public http:HttpClient) { }

  ngOnInit() {
    this.http.post('https://stark-lowlands-72624.herokuapp.com/duct',{}).subscribe((data:any)=>{
     this.duct=data;
     console.log(this.duct);
    })
  
  }

}
