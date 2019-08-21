import {Component, HostListener, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Menu} from './serviceModel';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  accordion = true;
  serviceMenu: any[];

  constructor(private http: HttpClient) {
  }
  @HostListener('window:resize', [])
  public detectWindow() {
    this.responsive();
  }
  ngOnInit() {
    this.getPriceList();
  }
  responsive() {
    if (window.innerWidth <= 800) {
      this.accordion = false;
    } else if (window.innerWidth >= 801) {
      this.accordion = true;
      this.getPriceList();

    }
  }
  private getPriceList(): void {
    this.http.get('./assets/data/service-menu.json').subscribe((x: Menu[]) => {
      this.serviceMenu = x;
    });
  }
}
