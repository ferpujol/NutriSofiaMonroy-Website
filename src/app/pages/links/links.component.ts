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
  showInAppBrowserNotice = false;

  handleEbookClick(event: Event): void {
    if (this.isInAppBrowser()) {
      event.preventDefault();
      this.showInAppBrowserNotice = true;
    }
  }

  dismissNotice(): void {
    this.showInAppBrowserNotice = false;
  }

  private isInAppBrowser(): boolean {
    const ua = navigator.userAgent || '';
    return /BytedanceWebview|musical_ly|TikTok|FBAN|FBAV|Instagram|Line\/|MicroMessenger/i.test(ua);
  }
}
