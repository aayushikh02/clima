import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carasoul',
  templateUrl: './carasoul.component.html',
  styleUrls: ['./carasoul.component.css','../bootstrap.css'],
  providers:[NgbCarouselConfig]
})
export class CarasoulComponent {
  images = ["https://www.daikin.com/corporate/why_daikin/glance/modals/01_sales/images/pic_01.jpg",
   "https://deltaairsystems.com/wp-content/uploads/2016/07/daikin_summer-promo_blog.png",
    "https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2014/10/16/Photos/Daikin-ktiH--621x414@LiveMint.jpg"]
  // .map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor(config:NgbCarouselConfig) {
    config.interval=2500;
  //   config.wrap=false;
    config.keyboard=false;
    config.pauseOnHover=false;
   }
  
 
}


