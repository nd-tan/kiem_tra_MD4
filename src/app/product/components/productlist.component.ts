import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-productlist',
  templateUrl: './../templates/productlist.component.html',
})
export class ProductlistComponent implements OnInit {
products: Product[]=[];
  constructor(
    private _ProductService:ProductService
  ) { }

  ngOnInit(): void {
    this._ProductService.getAll().subscribe(res =>{
      this.products = res;
    },e=>{
      console.log(e);
    })
  }

}
