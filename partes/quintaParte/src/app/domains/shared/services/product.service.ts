import { Injectable,inject } from '@angular/core';  // permite enviar un request
import { HttpClient } from '@angular/common/http'; 
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  private http =inject(HttpClient);
  constructor() { }


  // getProducts() {
  getProducts(category_id?:string) {
    const url =new URL(`https://api.escuelajs.co/api/v1/products`)
    if(category_id){
      url.searchParams.set('categoryId',category_id);
    
    }
    //this.http.get , va a regresar un observable y el tipo del observable sera de <Product[]>
    return this.http.get<Product[]>(url.toString());
  }

  
  getOne(id:string) {
    
    return this.http.get<Product>(`https://api.escuelajs.co/api/v1/products/${id}`);
  }

}
