import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-directive',
  templateUrl: './demo-directive.component.html',
  styleUrls: ['./demo-directive.component.scss']
})
export class DemoDirectiveComponent implements OnInit {
  isFine = false;
  month = 0;
  makeDecision(value: boolean){
    this.isFine = value;
  }

  selectMonth(e){
    this.month = e.target.value;
  }

  monthOption=[
    {value : '1',title: "Thang 1"},
    {value : '2',title: "Thang 2"},
    {value : '3',title: "Thang 3"},
    {value : '4',title: "Thang 4"},
    {value : '5',title: "Thang 5"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
