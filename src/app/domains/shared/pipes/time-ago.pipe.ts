import { Pipe, PipeTransform } from '@angular/core';
import {formatDistance} from 'date-fns'

@Pipe({
  name: 'timeAgo',
  standalone: true
})

/**Este pipe sirve para sacar la distancia que hay en las fechas 
 * por ejemplo 3 months ago 
 */
export class TimeAgoPipe implements PipeTransform {


  transform(value: string): string { 
    const date=new Date(value);
    const today =new Date();
    return formatDistance(today,date) ;
  }

}
