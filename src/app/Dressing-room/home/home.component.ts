import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  selectedCate: string;
  selectedProduct = {};
  selectCate(type: string) {
    this.selectedCate = type;
  }
  tryCloth(prod: { type: string; img: string }) {
    this.selectedProduct[prod.type] = prod.img;
  }
  ngOnInit(): void {}
}
