import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidentComponent } from './resident/resident.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductsComponent } from './products/products.component';
import { ServiceComponent } from './service/service.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { CommercialComponent } from './commercial/commercial.component';
import { IndustrialComponent } from './industrial/industrial.component';
import { SplitComponent } from './split/split.component';
import { AirComponent } from './air/air.component';
import { DuctComponent } from './duct/duct.component';
import { FloorComponent } from './floor/floor.component';
import { VrvComponent } from './vrv/vrv.component';
import { CarasoulComponent } from './carasoul/carasoul.component';
import { RoofComponent } from './roof/roof.component';
import { CassetteComponent } from './cassette/cassette.component';
import { ChillersComponent } from './chillers/chillers.component';
const routes: Routes = [
{path:"Products",component:ProductsComponent},
{path:"",pathMatch: 'full' ,redirectTo:'/Home'},
{path:"Our-Clients",component:ClientsComponent},
{path:"Service",component:ServiceComponent},
{path:"Contact",component:ContactComponent},
{path:"Enquiry",component:EnquiryComponent},
{path:"AboutUs",component:AboutusComponent},
{path:"Products/Resident",component:ResidentComponent},
{path: 'Products/Resident/split', component: SplitComponent},
{path: 'Products/Commercial/cassette', component: CassetteComponent},
{path: 'Products/Commercial/vrv', component: VrvComponent},
{path: 'Products/Commercial/duct', component: DuctComponent},
{path: 'Products/Commercial/roof', component: RoofComponent},
{path: 'Products/Resident/air', component: AirComponent},
{path:"Home",component:HomeComponent},
{path:"Products/Industrial",component:IndustrialComponent},
{path:"Products/Industrial/chillers",component:ChillersComponent},
{path:"Products/Commercial",component:CommercialComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
