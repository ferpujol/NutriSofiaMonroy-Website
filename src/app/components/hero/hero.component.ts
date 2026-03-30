import { Component } from '@angular/core';
import { SITE_CONFIG } from '../../shared/config';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  whatsappUrl = SITE_CONFIG.whatsappUrl;
}
