import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../models/product.model';



@Injectable({
  providedIn: 'root'
})


/**
 * 
 * Este es un servicio que se encarga de gestionar el contenido del carrito de compras
 */

export class CartService {

  cart = signal<Product[]>([]);
  total = computed(() => {
    const cart = this.cart();
    return cart.reduce((total, product) => total + product.price, 0);
  })

  constructor() { }

  addToCart(product: Product) {
    this.cart.update(state => [...state, product]);
  }
}
