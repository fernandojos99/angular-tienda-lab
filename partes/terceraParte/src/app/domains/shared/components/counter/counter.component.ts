import { Component ,Input,SimpleChanges,signal,Inject} from '@angular/core';


@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  @Input({required:true}) duration =0;
  @Input({required:true}) message ='';
  
  counter=signal(0);
  counterRef:number|undefined;
  

  // @Inject(PLATFORM_ID) private plataformId: object
  constructor() {
    // NO ASYNC , osea nada de promesas aqui 
    // before render
    // una vez
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {   // se usa el SimpleChanges para ver que es lo que cambio
    // before and during render osea antes del render y durante se esta este en la pantalla el componente 
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    console.log(duration);
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
  }
  

  ngOnInit() {
    // after render  //este casi siempre se ocupa y corre despues del render 
    // una vez 
    // async, then, subs , que es perfecto para cosas asincrononas y promesas
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);

    this.counterRef=window.setInterval(() => { //counterRef es para guardar la referencia al intervalo
      console.log('run interval');
      this.counter.update(statePrev => statePrev + 1);
    }, 1000)
  }


    ngAfterViewInit() {
      // after render
      // Para indicar si sus hijos ya fueron pintandos
      console.log('ngAfterViewInit');
      console.log('-'.repeat(10));
    }

    // para destruir un componente basta con quitarlo del dom , eso se podria hacer con un simpre ngif 
    //en el input
    ngOnDestroy(){
      console.log('ngOnDestroy');
      console.log('-'.repeat(10));
      window.clearInterval(this.counterRef) //detiene el intervalo 
    }



    doSomething() {
      console.log('change duration');
      //console.log(window.location.href);  // obtiene la direccion actual 
      // Obtener información del navegador
      // Información del navegador
      // window.history.back();
      // console.log(window.history.back());
      // console.log('Ancho de la pantalla:', window.screen.width);
      // console.log('Altura de la pantalla:', window.screen.height);
      // // Mostrar un mensaje de alerta
      // window.alert('¡Hola, mundo!');
      // // Mostrar un cuadro de confirmación
      // if (window.confirm('¿Estás seguro?')) {
      //   console.log('El usuario confirmó');
      // } else {
      //   console.log('El usuario canceló');
      // }

        
           }
        
      }
