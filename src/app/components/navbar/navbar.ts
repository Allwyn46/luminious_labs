import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LenisService } from '../../lenis-service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  menuOpen = false;
  constructor(private lenisService: LenisService) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  scrollToSection(sectionId: string) {
    console.log('Scrolling to:', sectionId);
    this.lenisService.scrollTo(sectionId);
  }
}
