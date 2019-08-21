import {Component, OnInit} from '@angular/core';
import {
  SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface
} from 'ngx-swiper-wrapper';
import {SwiperOptions} from 'swiper';
import {HttpClient} from '@angular/common/http';
import {Menu} from './serviceModel';

@Component({
  selector: 'price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})
export class PriceListComponent implements OnInit {

  piceList: any[];

  config: SwiperOptions = {
    pagination: {el: '.swiper-pagination', clickable: true},
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  };

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('./assets/data/service-menu.json').subscribe((list: Menu[]) => {
      this.piceList = list;
    });
  }

}
