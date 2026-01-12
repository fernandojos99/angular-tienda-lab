import { Component, Input, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '@shared/services/product.service';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export  class ProductDetailComponent {

  @Input() id?: string;
  product = signal<Product | null>(null);
  cover = signal('');   // este es para la imagen de portada escogida por los cuadros pequeños 
  private productService = inject(ProductService);   // Este servicio se encarga de mandar a llamar producto a la API
  private cartService = inject(CartService);   // injectamos esta dependencia para manejar el carrito 


  /**Este metodo utiliza el servicio y mediante el observable establece el producto */
  ngOnInit() {
    if (this.id) {
      this.productService.getOne(this.id)
      .subscribe({
        next: (product) => {
          this.product.set(product);
          if (product.images.length > 0) {   // por si la api viene sin imaganes extras
            this.cover.set(product.images[0])
          }
        }
      })
    }
    
  }

  changeCover(newImg: string) {
    this.cover.set(newImg);
  }


  addToCart() {

    // se hace el if para validar que el producto no sea nulo 
    const product = this.product();
    if (product) {
      this.cartService.addToCart(product);
    }
  }


}