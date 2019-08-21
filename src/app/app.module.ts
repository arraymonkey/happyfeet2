import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {AccordionModule} from 'ngx-accordion';
import {HttpClientModule} from '@angular/common/http';
import {NavComponent} from './nav/nav.component';
import {HeaderComponent} from './header/header.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {TeamComponent} from './team/team.component';
import {AppointmentComponent} from './appointment/appointment.component';
import {PriceListComponent} from './price-list/price-list.component';
import {BrandsComponent} from './brands/brands.component';

import {NgxUsefulSwiperModule} from 'ngx-useful-swiper';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPageScrollCoreModule} from 'ngx-page-scroll-core';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';
import {MatFormFieldModule, MatSelectModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    HeaderComponent,
    AboutUsComponent,
    ContactFormComponent,
    TeamComponent,
    AppointmentComponent,
    PriceListComponent,
    BrandsComponent
  ],
  imports: [
    BrowserModule, AccordionModule, HttpClientModule,
    NgxUsefulSwiperModule, NgMultiSelectDropDownModule.forRoot(),
    NgxPageScrollModule, FormsModule, NgSelectModule, MatFormFieldModule, MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
