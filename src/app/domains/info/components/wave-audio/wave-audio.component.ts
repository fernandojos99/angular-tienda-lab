import { Component, ElementRef, Input, ViewChild, signal } from '@angular/core';


import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [],
  templateUrl: './wave-audio.component.html',
  styleUrls: ['./wave-audio.component.css']
})


export class WaveAudioComponent {

  @Input({required: true}) audioUrl!: string;
  //ElementRef es un elemento html 
  @ViewChild('wave') container!: ElementRef;
  private ws!: WaveSurfer;
  isPlaying = signal(false); // para llevar el control si se esta reproduciendo 


  ngAfterViewInit() {    // muchas librerias de javascript se llaman desde este metodo
    this.ws = WaveSurfer.create({
      url: this.audioUrl,       // aqui esta haciendo una asignacion de valores pero es de una libreria independiente 
      container: this.container.nativeElement            // asi que tendria que ver que valor esta esperando , podria ser un objeto o un json 
      //// podriamos hacer asi con javascript 
    });
    this.ws.on('play', () => this.isPlaying.set(true));
    this.ws.on('pause', () => this.isPlaying.set(false));
  }

  playPause() {
    this.ws.playPause();
  }
}


