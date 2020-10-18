import { Component } from '@angular/core';

//decorator
@Component({
  selector: 'app-header',
//   template: `
//     <h1>Demo Component</h1>
//     <span>This is a demo component</span>
//   `,
  templateUrl:'./header.component.html',
  styleUrls:['./header.component.scss']
})
export class Header {}
