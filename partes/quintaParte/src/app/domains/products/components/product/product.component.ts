import { Component, Input,Output,EventEmitter,signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';

import { Product } from '../../../shared/models/product.model';
import{ReversePipe} from '@shared/pipes/reverse.pipe'
import{TimeAgoPipe} from '@shared/pipes/time-ago.pipe'




@Component({
  selector: 'app-product', //Este selector sirve para utilizarlo en html como si fuera una etiqueta
  standalone: true,
  imports: [CommonModule,ReversePipe,TimeAgoPipe,RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  //El htpps es un link que nos da imagenes aleatorias 
  // img = 'https://picsum.photos/640/640?r=' + Math.random();
  

  // con la siguiente estructura indico que el componente requiere un atributo de tipo string 
  // @Input({required:true}) img :string = '';    // hay que darle un valor por defecto y en este caso , un string vacio
  // @Input({required:true}) price :number = 0;    // con required es necesario que el componente padre mande el dato
  // @Input({required:true}) title:string = '';
  

  imagenLimpia = '';
  
  @Input({required:true}) product !:Product ;  // enves de lo de arriba , ahora este componente va a recibir
  // un atributo tipo Producto.

  /**Ocupo este ngOnInit para limpiar la imagen para que se pueda renderizar */
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.imagenLimpia=this.product.images[0];
    this.imagenLimpia= this.imagenLimpia.replace(/["\[\]]/g, '');
  }

/**
Emite un evento
Con Output podemos crear un nuevo evento * */
  @Output() addToCart = new EventEmitter(); // EventEmitter es una clase que se usa para emitir eventos desde
                                            //un componente hijo a uno padre .

  addToCartHandler() {

    this.addToCart.emit(this.product);  // como podemos ver el evento puede mandar cualquier cosa 
    // this.addToCart.emit('hola este es un msg desde el hijo ');
  }

}