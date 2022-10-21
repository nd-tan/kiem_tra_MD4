import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { environment } from 'src/environments/environment';
const apiUrl = environment.api_Url+'products';
@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(
    private _HttpClient:HttpClient
  ) { }
  getAll():Observable<Product[]>{
    return this._HttpClient.get<Product[]>(apiUrl);
  }
  find(id:any):Observable<Product>{
    return this._HttpClient.get<Product>(apiUrl+'/'+id);
  }
  update(id:any, data:Product):Observable<Product>{
    return this._HttpClient.put<Product>(apiUrl+'/'+id, data);
  }
  store(data:Product):Observable<Product>{
    return this._HttpClient.post<Product>(apiUrl, data);
  }
  delete(id:any):Observable<Product>{
    return this._HttpClient.delete<Product>(apiUrl+'/'+id);
  }
}
