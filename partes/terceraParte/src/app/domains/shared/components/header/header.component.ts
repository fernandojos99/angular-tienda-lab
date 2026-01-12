import { Component, signal ,Input,SimpleChanges } from '@angular/core';

import {Product } from '../../models/product.model'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input({required:true}) cart:Product[]=[];
  hideSideMenu = signal(true);
  total = signal(0);

  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }


  ngOnChanges(changes: SimpleChanges) {
    const cart = changes['cart'];
    if (cart) {
      this.total.set(this.calcTotal());
    }
  }

  calcTotal() {
    //Este reduce es de javascript y es como un foreach 
    return this.cart.reduce((total, product) => total + product.price, 0);
  }
}