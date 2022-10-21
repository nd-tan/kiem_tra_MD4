import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-productadd',
  templateUrl: './../templates/productadd.component.html',
})
export class ProductaddComponent implements OnInit {
  productForm!: FormGroup;
  constructor(
    private _ProductService:ProductService,
    private _Router:Router
  ) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      'name' : new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      'price': new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('[0-9]*')
      ]),
      'description': new FormControl('',[
        Validators.required,
      ])
    })
  }
  onSubmit(){
    let data = this.productForm.value;
    let product : Product = {
      name: data.name,
      price: data.price,
      description: data.description
    }
    this._ProductService.store(data).subscribe(()=>{
      alert('Thêm sản phẩm thành công!');
      this._Router.navigate(['product']);
    }, e=>{
      console.log(e);
  })

  }

}
