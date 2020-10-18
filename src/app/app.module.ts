import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Header } from './Header/header.component';
import { Ex1HomeComponent } from './Exercise-1/ex1-home/ex1-home.component';
import { Ex1HeaderComponent } from './Exercise-1/ex1-header/ex1-header.component';
import { Ex1ContentComponent } from './Exercise-1/ex1-content/ex1-content.component';
import { Ex1SideBarComponent } from './Exercise-1/ex1-side-bar/ex1-side-bar.component';
import { Ex1FooterComponent } from './Exercise-1/ex1-footer/ex1-footer.component';
import { Ex2HomeComponent } from './Exercise-2/ex2-home/ex2-home.component';
import { Ex2HeaderComponent } from './Exercise-2/ex2-header/ex2-header.component';
import { Ex2CarouselComponent } from './Exercise-2/ex2-carousel/ex2-carousel.component';
import { Ex2ContentComponent } from './Exercise-2/ex2-content/ex2-content.component';
import { Ex2FooterComponent } from './Exercise-2/ex2-footer/ex2-footer.component';
import { Ex2CardItemComponent } from './Exercise-2/ex2-card-item/ex2-card-item.component';
import { DemoDataBindingComponent } from './data-binding/demo-data-binding/demo-data-binding.component'
import {FormsModule} from '@angular/forms';
import { CarComponent } from './Change-car-color/car/car.component';
import { DemoDirectiveComponent } from './demo-directive/demo-directive.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { StudentManagementComponent } from './student-management/student-management.component';
import { StudentItemComponent } from './student-management/student-item/student-item.component';
import { HomeComponent } from './Dressing-room/home/home.component';
import { CategoryComponent } from './Dressing-room/category/category.component';
import { ProductListComponent } from './Dressing-room/product-list/product-list.component';
import { ModelComponent } from './Dressing-room/model/model.component';
import { ProductItemComponent } from './Dressing-room/product-item/product-item.component'

@NgModule({
  declarations: [AppComponent,Header, Ex1HomeComponent, Ex1HeaderComponent, Ex1ContentComponent, Ex1SideBarComponent, Ex1FooterComponent, Ex2HomeComponent, Ex2HeaderComponent, Ex2CarouselComponent, Ex2ContentComponent, Ex2FooterComponent, Ex2CardItemComponent, DemoDataBindingComponent, CarComponent, DemoDirectiveComponent, ProductManagementComponent, StudentManagementComponent, StudentItemComponent, HomeComponent, CategoryComponent, ProductListComponent, ModelComponent, ProductItemComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
