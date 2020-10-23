import {
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent
  implements OnInit, AfterViewInit, OnDestroy, DoCheck, OnChanges {
  categoryList = [
    { tabName: 'tabTopClothes', showName: 'Áo', type: 'topclothes' },
    { tabName: 'tabBotClothes', showName: 'Quần', type: 'botclothes' },
    { tabName: 'tabShoes', showName: 'Giày dép', type: 'shoes' },
    { tabName: 'tabHandBags', showName: 'Túi xách', type: 'handbags' },
    { tabName: 'tabNecklaces', showName: 'Dây chuyền', type: 'necklaces' },
    // { tabName: 'tabModels', showName: 'Người mẫu', type: 'models' },
    { tabName: 'tabHairStyle', showName: 'Kiểu tóc', type: 'hairstyle' },
    { tabName: 'tabBackground', showName: 'Nền', type: 'background' },
  ];

  constructor() {
    console.log('constructor');
  }
  @Output() cateEmitter = new EventEmitter();
  selectCate(type: string) {
    this.cateEmitter.emit(type);
  }
  ngOnInit(): void {
    this.cateEmitter.emit('topclothes');
  }
  ngOnChanges() {
    console.log('ngOnChanges');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
}
