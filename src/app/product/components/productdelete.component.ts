import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-productdelete',
  templateUrl: './../templates/productdelete.component.html',
})

export class ProductdeleteComponent implements OnInit {
  id:any;
  product!: Product;
  productForm!: FormGroup;
  constructor(
    private _ProductService:ProductService,
    private _ActivatedRoute:ActivatedRoute,
    private _Router:Router
  ) { }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((paraMap :ParamMap)=>{
      const id = paraMap.get('id');
      this.id=id;
      this._ProductService.find(id).subscribe(product =>{
        this.product=product;
      })
    })
  }

  handDelete(){
    this._ProductService.delete(this.id).subscribe(()=>{
      alert('Xóa sản phẩm thành công!');
      this._Router.navigate(['product']);
    }, e=>{
      console.log(e);
    })
  }
}
