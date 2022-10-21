import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productedit',
  templateUrl: './../templates/productedit.component.html',
})
export class ProducteditComponent implements OnInit {
  product!:Product;
  productForm!: FormGroup;
  id:any;
  constructor(
    private _ProductService:ProductService,
    private _ActivatedRoute:ActivatedRoute,
    private _Router: Router,

  ) { }
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((paraMap:ParamMap) => {
      const id = paraMap.get('id');
      this.id=id;
      this._ProductService.find(id).subscribe(product =>{
        this.productForm = new FormGroup({
          name: new FormControl(product.name,[
            Validators.required,
            Validators.minLength(3)
          ]),
          price: new FormControl(product.price,[
            Validators.required,
            Validators.minLength(5),
            Validators.pattern('[0-9]*')
          ]),
          description: new FormControl(product.description,[
            Validators.required
          ])
        })
      })
    })
  }
  onSubmit(){
    let data= this.productForm.value;
    this.product={
      name: data.name,
      price: data.price,
      description: data.description
    }
    this._ProductService.update(this.id, data).subscribe(()=>{
      alert('Cập nhật sản phẩm thành công');
      this._Router.navigate(['product']);
    },e=>{
      console.log(e);
    })
  }

}
