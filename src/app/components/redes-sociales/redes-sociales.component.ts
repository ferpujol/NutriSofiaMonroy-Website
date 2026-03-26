import { Component } from '@angular/core';

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.component.html',
  styleUrl: './redes-sociales.component.scss'
})
export class RedesSocialesComponent {
  socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com/nutrisofiamonroy', label: '@nutrisofiamonroy' },
    { name: 'TikTok', url: 'https://tiktok.com/@nutrisofiamonroy', label: '@nutrisofiamonroy' },
    { name: 'Facebook', url: 'https://facebook.com/nutrisofiamonroy', label: 'Nutri Sofía Monroy' },
  ];
}
