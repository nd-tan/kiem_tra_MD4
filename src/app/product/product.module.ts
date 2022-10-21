import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductaddComponent } from './components/productadd.component';
import { ProducteditComponent } from './components/productedit.component';
import { ProductdeleteComponent } from './components/productdelete.component';
import { ProductRoutingModule } from './product-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductshowComponent } from './components/productshow.component';
import { ProducterrorComponent } from './components/producterror.component';

@NgModule({
  declarations: [
    ProductaddComponent,
    ProducteditComponent,
    ProductdeleteComponent,
    ProductshowComponent,
    ProducterrorComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
