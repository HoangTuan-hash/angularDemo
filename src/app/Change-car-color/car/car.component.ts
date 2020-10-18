import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  imgSrc = '../../../assets/img/black-car.jpg';
  //auto detection
  changeColor(img){
    this.imgSrc = `../../../assets/img/${img}`
  }
  constructor() { }

  ngOnInit(): void {
  }

}
