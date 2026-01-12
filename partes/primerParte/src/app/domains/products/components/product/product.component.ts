import { Component, Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product', //Este selector sirve para utilizarlo en html como si fuera una etiqueta
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  //El htpps es un link que nos da imagenes aleatorias 
  // img = 'https://picsum.photos/640/640?r=' + Math.random();
  

  // con la siguiente estructura indico que el componente requiere un atributo de tipo string 
  @Input({required:true}) img :string = '';    // hay que darle un valor por defecto y en este caso , un string vacio
  @Input({required:true}) price :number = 0;    // con required es necesario que el componente padre mande el dato
  @Input({required:true}) title:string = '';


  //Con Output podemos crear un nuevo evento 
  @Output() addToCart = new EventEmitter(); // EventEmitter es una clase que se usa para emitir eventos desde
                                            //un componente hijo a uno padre .

  addToCartHandler() {
    console.log('click form child');
    this.addToCart.emit('hola este es un msg desde el hijo ' + this.title);
    // this.addToCart.emit('hola este es un msg desde el hijo ');
  }

}