import {Component, OnInit} from '@angular/core';
import {EasingLogic} from 'ngx-page-scroll-core';
import {AppointmentService} from './appointment/appointment.service';
import {Menu} from './price-list/serviceModel';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'happyfeet';

  constructor(private appSer: AppointmentService) {
  }

  ngOnInit(): void {
    $('video').css('display', 'block');
    this.appSer.getServices().subscribe((x: Menu[])=>{
      this.appSer._services.next(x);
    });
  }

}
