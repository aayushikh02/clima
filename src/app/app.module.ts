import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';//form modules start
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';//form module end
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductsComponent } from './products/products.component';
import { ServiceComponent } from './service/service.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { ResidentComponent } from './resident/resident.component';
import { CommercialComponent } from './commercial/commercial.component';
import { IndustrialComponent } from './industrial/industrial.component';
import { Router, RouterModule } from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';
import { SplitComponent } from './split/split.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { CarasoulComponent } from './carasoul/carasoul.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {MatButtonModule} from '@angular/material/button';
import { DuctComponent } from './duct/duct.component';
import { AirComponent } from './air/air.component';
import { VrvComponent } from './vrv/vrv.component';
import { FloorComponent } from './floor/floor.component';
import { RoofComponent } from './roof/roof.component';
import { CassetteComponent } from './cassette/cassette.component';
import { ChillersComponent } from './chillers/chillers.component';
// For MDB Angular Free
// import { CarouselModule, WavesModule } from 'angular-bootstrap-md'
// import { MDBBootstrapModulesPro, MDBSpinningPreloader } from 'ng-uikit-pro-standard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ProductsComponent,
    ServiceComponent,
    ClientsComponent,
    ContactComponent,
    EnquiryComponent,
    ResidentComponent,
    CommercialComponent,
    IndustrialComponent,
    SplitComponent,
    CarasoulComponent,
    DuctComponent,
    AirComponent,
    VrvComponent,
    FloorComponent,
    RoofComponent,
    CassetteComponent,
    ChillersComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    AppRoutingModule,
    MatDividerModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    NgbModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
