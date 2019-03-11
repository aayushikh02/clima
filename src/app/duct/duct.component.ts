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
    this.http.post('http://localhost:8082/duct',{}).subscribe((data:any)=>{
     this.duct=data;
     console.log(this.duct);
    })
  
  }

}
