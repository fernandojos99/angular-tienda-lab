import { Component,signal } from '@angular/core';

import { CounterComponent } from './../../../shared/components/counter/counter.component';
import { WaveAudioComponent } from './../../../info/components/wave-audio/wave-audio.component';
// import { HeaderComponent } from '@shared/components/header/header.component';


@Component({
  selector: 'app-about',
  standalone: true,
  // imports: [CommonModule,CounterComponent,WaveAudioComponent,HeaderComponent], // ya no se ocupa porque se usa layout
  imports: [CounterComponent, WaveAudioComponent],

  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
// export default class AboutComponent {

  duration =signal (1000);
  message=signal ('hola');
 
  // console.log('constructor');

  




  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber) 
  }

  changeMessage(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value) 
  }



}
