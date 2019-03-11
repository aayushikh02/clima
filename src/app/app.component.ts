import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./bootstrap.css']
})
export class AppComponent {
  i:any;
  constructor(private route: Router){
    // const index=route.data.subscribe(v => console.log(v));

    // console.log(route.url);
  }
  // title = 'ClimatechJpr';

  // links = ['Home', 'AboutUs','Products', 'Service','Our-Clients','Enquiry','Contact'];

  // background = '';
  
  
}

