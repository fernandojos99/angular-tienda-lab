import { Component, signal ,Input,SimpleChanges, inject } from '@angular/core';

import {Product } from '../../models/product.model'
import { CartService } from '../../services/cart.service';
import { RouterLinkWithHref ,RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // @Input({required:true}) cart:Product[]=[];  // ya no se ocupa porque se ocupa el servicio 
  hideSideMenu = signal(true);
  // total = signal(0);
  private cartService =inject(CartService);  // private para que no se renderize INVESTIGAR DESPUES 
  cart =this.cartService.cart;
  total=this.cartService.total;  //cart y total tambien son signals



  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }

   //ya no se ocupan por el service
  // ngOnChanges(changes: SimpleChanges) {
  //   const cart = changes['cart']; // con esto valida que el cambio sea en cart 
  //   if (cart) {
  //     this.total.set(this.calcTotal());
  //   }
  // }

  // calcTotal() {
  //   //Este reduce es de javascript y es como un foreach 
  //   return this.cart.reduce((total, product) => total + product.price, 0);
  // }
}