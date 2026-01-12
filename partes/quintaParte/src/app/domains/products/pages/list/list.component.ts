import { Component,signal,inject,SimpleChanges,Input} from '@angular/core';

import { RouterLinkWithHref } from '@angular/router';

// la siguiente linea es para importar componentes 
import { ProductComponent } from './../../components/product/product.component';

// import { Product } from './../../../shared/models/product.model';
import { Product } from '@shared/models/product.model';
// import { HeaderComponent } from '@shared/components/header/header.component';
// import { single } from 'rxjs';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';


@Component({
  selector: 'app-list',
  standalone: true,
  // imports: [ProductComponent,CommonModule,HeaderComponent],
  imports: [ProductComponent, RouterLinkWithHref],
   
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
// export default  class ListComponent {

  products = signal<Product[]>([]); // su valor incial es un arreglo vacio
  // cart=signal<Product[]>([]);    // para guardar los  cartas que se han seleccionado
  categories = signal<Category[]>([]);

  private cartService =inject(CartService);  // private para que no se renderize INVESTIGAR DESPUES 
  private productService =inject (ProductService);
  private categoryService = inject(CategoryService);
  @Input() category_id?: string;
  
  // ya no se ocupa porque se usa la API
  // constructor() {
  //   const initProducts: Product[]  = [
  //     {
  //       id: Date.now(),
  //       title: 'Pro 1',
  //       price: 100,
  //       image: 'https://picsum.photos/640/640?r=23',
  //       creationAt: new Date().toISOString()
  //     },
  //     {
  //       id: Date.now(),
  //       title: 'Pro 2',
  //       price: 100,
  //       image: 'https://picsum.photos/640/640?r=12',
  //       creationAt: new Date().toISOString()
  //     },
  //     {
  //       id: Date.now(),
  //       title: 'Pro 3',
  //       price: 100,
  //       image: 'https://picsum.photos/640/640?r=1212',
  //       creationAt: new Date().toISOString()
  //     },
  //     {
  //       id: Date.now(),
  //       title: 'Pro 1',
  //       price: 100,
  //       image: 'https://picsum.photos/640/640?r=23',
  //       creationAt: new Date().toISOString()
  //     },
  //     {
  //       id: Date.now(),
  //       title: 'Pro 2',
  //       price: 100,
  //       image: 'https://picsum.photos/640/640?r=12',
  //       creationAt: new Date().toISOString()
  //     },
  //     {
  //       id: Date.now(),
  //       title: 'Pro 3',
  //       price: 100,
  //       image: 'https://picsum.photos/640/640?r=1212',
  //       creationAt: new Date().toISOString()
  //     }
  //   ];
  //   this.products.set(initProducts);
  // }

  // LO SIGUIENTE DE DEJA DE OCUPAR PARA DARLE OTRA ESTRUCTURA

  // addToCart(event: Product) {
  //   console.log('estamos en al padre');
  //   console.log(event);

  //Esta funcion es llamada cuando se atrapa el evento (addToCart)="addToCart($event)"  en el html y se le 
  //manda el evento , pero mas bien recive lo que transmitio dicho evento del emit 
  
  
  // ngOnInit() {
  //   this.productService.getProducts()
  //   .subscribe({
  //     next: (products) => {
  //       //configura el signal products a el products que regresa el observable
  //       //http
  //       this.products.set(products); 
        
  //     },
  //     error: () => {
        
  //     }
  //   })
  // }



  ngOnInit() {
    this.getCategories();
    // this.getProducts();
  }

  ngOnChanges(changes: SimpleChanges) {
    // const category_id =changes['category_id'];
    // if(category_id){
      this.getProducts();
    // }

  }

  

  private getProducts() {
    this.productService.getProducts(this.category_id)
    // this.productService.getProducts()

    .subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: () => {
        
      }
    })
  }

  private getCategories() {
    this.categoryService.getAll()
    .subscribe({
      next: (data) => {
        this.categories.set(data);
      },
      error: () => {
        
      }
    })
  }






  addToCart(product: Product) {
      // this.cart.update(prevState => [...prevState, product]);
      this.cartService.addToCart(product)
    }


  
}
