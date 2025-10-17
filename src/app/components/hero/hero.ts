import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { fadeInOnEnter, fadeInUpOnEnter } from '@ngverse/motion/animatecss';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  animations: [
    // pass options if supported by the helper
    fadeInUpOnEnter({ duration: 600, delay: 100 }),
  ],
})
export class Hero {}
