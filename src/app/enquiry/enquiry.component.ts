import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css','../bootstrap.css']
})
export class EnquiryComponent implements OnInit {
  done:any;
  name:string;
  address:any;
  city:string;
  state:string;
  country:string;
  phone:any;
  mail:any;
  message:any;
  enquiry={name:"",address:"",city:"",state:"",country:"",phone:"",mail:"",message:""}
  msg:string;
  show: boolean = true;
  showi:boolean
  constructor(public http:HttpClient) { }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  add(){
    this.show= false;
    this.http.post('https://stark-lowlands-72624.herokuapp.com/enqurie',this.enquiry).subscribe((data)=>{
        console.log(data);
        if (data==true)
        {
          this.showi=true;
        }
    })
  }
  


ngOnInit() {
}
}

