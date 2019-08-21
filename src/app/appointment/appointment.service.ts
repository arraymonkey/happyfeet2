import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {Menu} from '../price-list/serviceModel';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  _services = new Subject();
  service = this._services.asObservable();

  constructor(private http: HttpClient) {
  }

  getServices() {
    let service: any[] = [];
    return this.http.get('assets/data/service-menu.json');


  }

  postAppt(data) {
    this.http.post('https://192.168.1.4:5001', data).subscribe(x => console.log(x));
  }
}
