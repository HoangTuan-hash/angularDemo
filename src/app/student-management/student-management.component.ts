import { Component, OnInit } from '@angular/core';
import { IStudent } from '../models/student';

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.scss'],
})
export class StudentManagementComponent implements OnInit {
  studentList: IStudent[] = [
    { name: 'Đặng Trung Hiếu', age: 13, className: '13vhl1' },
    { name: 'Nguyễn Đình Dũng', age: 15, className: '15vhl2' },
    { name: 'Phan Đình Tiến', age: 20, className: '17vhl14' },
    { name: 'Lê Thị Thúy Hiền', age: 18, className: '19vhl16' },
  ];
  selectedStudent: IStudent[] = [];

  chooseStudent(student: IStudent) {
    const index = this.selectedStudent.findIndex(
      (item) => item.name === student.name
    );
    index === -1 && this.selectedStudent.push(student);
  }
  constructor() {}

  ngOnInit(): void {}
}
