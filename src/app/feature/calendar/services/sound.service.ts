import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SoundService {
  bellRingSound: HTMLAudioElement | undefined;

  init(): void {
    this.bellRingSound = new Audio('https://www.soundjay.com/misc/sounds/jingle-bell-1.mp3');
  }

  playSound(): void {
    this.bellRingSound?.play();
  }
}
