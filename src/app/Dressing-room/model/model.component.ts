import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss'],
})
export class ModelComponent implements OnInit {
  @Input() prodCollection: any;
  constructor() {}

  ngOnInit(): void {}
}
