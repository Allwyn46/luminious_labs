import { AfterViewInit, Component, OnDestroy, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Features } from './components/features/features';
import { Product } from './components/product/product';
import { Benefits } from './components/benefits/benefits';
import { Faq } from './components/faq/faq';
import { Footer } from './components/footer/footer';
import Lenis from '@studio-freight/lenis';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Hero, Features, Product, Benefits, Faq, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterViewInit, OnDestroy {
  protected readonly title = signal('luminous-labs');
  private lenis!: Lenis;
  private rafId: number | null = null;

  ngAfterViewInit(): void {
    this.lenis = new Lenis({
      duration: 1.2, // scroll speed
      smoothWheel: true,
    });

    const raf = (time: number) => {
      this.lenis.raf(time);
      this.rafId = requestAnimationFrame(raf);
    };

    this.rafId = requestAnimationFrame(raf);
  }

  ngOnDestroy(): void {
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }
}
