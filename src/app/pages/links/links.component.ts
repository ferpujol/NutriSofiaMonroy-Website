import { Component } from '@angular/core';
import { SITE_CONFIG } from '../../shared/config';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss',
})
export class LinksComponent {
  whatsappUrl = SITE_CONFIG.whatsappUrl;
  ebookUrl = '/ebook-hipotiroidismo-hashimoto.pdf';
  homeUrl = '/';
}
