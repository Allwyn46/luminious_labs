import { Injectable, NgZone } from '@angular/core';
import Lenis from '@studio-freight/lenis';

@Injectable({
  providedIn: 'root',
})
export class LenisService {
  private lenis?: Lenis;

  constructor(private zone: NgZone) {
    this.initLenis();
  }

  private initLenis() {
    this.zone.runOutsideAngular(() => {
      this.lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true,
      });

      const raf = (time: number) => {
        this.lenis?.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    });
  }

  scrollTo(target: HTMLElement | string, offset = 0) {
    if (!this.lenis) return;

    const element = typeof target === 'string' ? document.getElementById(target) : target;

    if (element) {
      this.lenis.scrollTo(element, { offset });
    } else {
      console.warn(`❌ Element not found for id: ${target}`);
    }
  }
}
