import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss'],
})
export class ProductManagementComponent implements OnInit {
  product = [
    { MaSP: 1, TenSP: 'Sony XZ', Gia: 1000 },
    { MaSP: 2, TenSP: 'Sony XZ2', Gia: 1000 },
    { MaSP: 3, TenSP: 'HTC U Ultra', Gia: 1000 },
    { MaSP: 4, TenSP: 'HTC U12 Plus', Gia: 1000 },
    { MaSP: 5, TenSP: 'Iphone XS MAX', Gia: 1000 },
    { MaSP: 6, TenSP: 'Iphone XR', Gia: 1000 },
    { MaSP: 7, TenSP: 'Xiaomi Mi Note 3', Gia: 9900 },
    { MaSP: 8, TenSP: 'Xiaomi Mi 8', Gia: 1000 },
    { MaSP: 9, TenSP: 'Galaxy Note 9', Gia: 1000 },
    { MaSP: 10, TenSP: 'Galaxy S9 Plus', Gia: 1000 },
    { MaSP: 11, TenSP: 'Nokia X9', Gia: 1000 },
  ];

  productName: string;
  productID: string;
  price: string;
  isHighlight: true;

  selectedProduct: {
    MaSP: number;
    TenSP: string;
    Gia: number;
  };
  addProduct() {
    let newProduct = {
      MaSP: +this.productID,
      TenSP: this.productName,
      Gia: +this.price,
    };
    this.product.push(newProduct);
    this.productName = '';
    this.productID = '';
    this.price = '';
  }
  deleteProduct(id) {
    let index = this.product.findIndex((product) => product.MaSP === id);
    if (index !== -1) {
      this.product.splice(index, 1);
    }
  }

  selectProduct(product: { MaSP: number; TenSP: string; Gia: number }) {
    this.selectedProduct = product;
    console.log(this.selectedProduct);
  }

  constructor() {}

  ngOnInit(): void {}
}
