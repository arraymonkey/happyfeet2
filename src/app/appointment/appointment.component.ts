import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Hours} from './hours';
import {AppointmentService} from './appointment.service';
import {Menu} from '../price-list/serviceModel';
import {combineAll} from 'rxjs/operators';

declare var SlimSelect: any;

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'],
  providers: [FormBuilder]
})
export class AppointmentComponent implements OnInit {
  myForm: FormGroup;
  hours: any[];
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  selected = 'option2';

  constructor(private fb: FormBuilder, private http: HttpClient, private apptService: AppointmentService) {
  }

  ngOnInit() {
    this.http.get('assets/data/hours.json').subscribe((x: Hours[]) => {
      this.hours = x;
    });
    this.apptService.service.subscribe((x: any[]) => {
      this.dropdownList = x;
    });
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'Name',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

  }
  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

}



