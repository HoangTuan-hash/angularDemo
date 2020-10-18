import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-data-binding',
  templateUrl: './demo-data-binding.component.html',
  styleUrls: ['./demo-data-binding.component.scss']
})
export class DemoDataBindingComponent implements OnInit {
  name = "Vo Hoang Tuan";
  isDisabled = true;
  imgSource = 'https://images.unsplash.com/photo-1447710441604-5bdc41bc6517?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80';
  changeName(){
    this.name = 'Luxubu';
  };
  email:string;
  constructor() { }

  ngOnInit(): void {
  }

}
