import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-productshow',
  templateUrl: './../templates/productshow.component.html',
})
export class ProductshowComponent implements OnInit {
  product!: Product;

  constructor(
    private _ProductService:ProductService,
    private _ActivatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((paraMap:ParamMap) => {
      const id = paraMap.get('id');

      this._ProductService.find(id).subscribe(res =>{
        this.product = res;
      },e=>{
        console.log(e);
      })
    })
  }
}
