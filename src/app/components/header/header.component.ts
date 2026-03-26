import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isScrolled = false;
  isMenuOpen = false;

  navLinks = [
    { label: 'Inicio', fragment: 'inicio' },
    { label: 'Sobre Mí', fragment: 'sobre-mi' },
    { label: 'Epigenética', fragment: 'epigenetica' },
    { label: 'Redes', fragment: 'redes-sociales' },
    { label: 'Agenda', fragment: 'agenda' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  scrollTo(fragment: string): void {
    this.closeMenu();
    const el = document.getElementById(fragment);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
