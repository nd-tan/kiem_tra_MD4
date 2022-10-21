import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductaddComponent } from './components/productadd.component';
import { ProductdeleteComponent } from './components/productdelete.component';
import { ProducteditComponent } from './components/productedit.component';
import { ProducterrorComponent } from './components/producterror.component';
import { ProductlistComponent } from './components/productlist.component';
import { ProductshowComponent } from './components/productshow.component';

const routes: Routes = [
  {path:'',component:ProductlistComponent},
  {path:'add',component:ProductaddComponent},
  {path:'edit/:id',component:ProducteditComponent},
  {path:'delete/:id',component:ProductdeleteComponent},
  {path:':id',component:ProductshowComponent},
  {path:'**',component:ProducterrorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
