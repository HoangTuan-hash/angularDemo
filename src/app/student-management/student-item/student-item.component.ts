import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IStudent } from 'src/app/models/student';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.scss'],
})
export class StudentItemComponent implements OnInit {
  @Input() item: IStudent;
  @Output() studentEmitter = new EventEmitter();
  constructor() {}

  chooseStudent() {
    this.studentEmitter.emit(this.item);
  }
  ngOnInit(): void {}
}
