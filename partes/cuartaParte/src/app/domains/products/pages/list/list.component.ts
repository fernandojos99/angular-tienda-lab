import { Component,signal,inject } from '@angular/core';


// la siguiente linea es para importar componentes 
import { ProductComponent } from './../../components/product/product.component';

import { Product } from './../../../shared/models/product.model';
import { HeaderComponent } from './../../../shared/components/header/header.component';
// import { single } from 'rxjs';
import { CartService } from '../../../shared/services/cart.service';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]); // su valor incial es un arreglo vacio
  // cart=signal<Product[]>([]);    // para guardar los  cartas que se han seleccionado


  private cartService =inject(CartService);  // private para que no se renderize INVESTIGAR DESPUES 
 
  constructor() {
    const initProducts: Product[]  = [
      {
        id: Date.now(),
        title: 'Pro 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=23',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 2',
        price: 100,
        image: 'https://picsum.photos/640/640?r=12',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 3',
        price: 100,
        image: 'https://picsum.photos/640/640?r=1212',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=23',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 2',
        price: 100,
        image: 'https://picsum.photos/640/640?r=12',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 3',
        price: 100,
        image: 'https://picsum.photos/640/640?r=1212',
        creationAt: new Date().toISOString()
      }
    ];
    this.products.set(initProducts);
  }



  // addToCart(event: Product) {
  //   console.log('estamos en al padre');
  //   console.log(event);

  //Esta funcion es llamada cuando se atrapa el evento (addToCart)="addToCart($event)"  en el html y se le 
  //manda el evento , pero mas bien recive lo que transmitio dicho evento del emit 
  addToCart(product: Product) {
      // this.cart.update(prevState => [...prevState, product]);
      this.cartService.addToCart(product)
    }


  
}
