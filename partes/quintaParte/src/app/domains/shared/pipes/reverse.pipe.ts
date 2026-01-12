import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',  // este es el nombre del pipe , que se usara en los html
  standalone: true
})
export class ReversePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

   transform(value:string):string {   
    return value.split('').reverse().join('');
  }

}
