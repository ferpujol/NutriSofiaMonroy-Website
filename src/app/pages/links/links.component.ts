import { Component, inject } from '@angular/core';
import { SITE_CONFIG } from '../../shared/config';
import { AnalyticsService } from '../../shared/analytics.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss',
})
export class LinksComponent {
  private analytics = inject(AnalyticsService);

  whatsappUrl = SITE_CONFIG.whatsappUrl;
  ebookUrl = '/ebook-hipotiroidismo-hashimoto.pdf';
  homeUrl = '/';
  showInAppBrowserNotice = false;

  handleWebsiteClick(): void {
    this.analytics.trackLinksButtonClick('pagina_web', this.homeUrl);
  }

  handleWhatsappClick(): void {
    this.analytics.trackLinksButtonClick('agenda_whatsapp', this.whatsappUrl);
    this.analytics.trackEvent('generate_lead', {
      method: 'whatsapp',
      event_label: 'Links Bio - Agenda tu consulta',
    });
  }

  handleEbookClick(event: Event): void {
    const inApp = this.isInAppBrowser();

    this.analytics.trackLinksButtonClick('ebook_hashimoto', this.ebookUrl, {
      blocked_by_in_app: inApp,
    });

    this.analytics.trackEvent('file_download', {
      file_name: 'ebook-hipotiroidismo-hashimoto.pdf',
      file_extension: 'pdf',
      link_text: 'Ebook Hipotiroidismo de Hashimoto',
      blocked_by_in_app: inApp,
    });

    if (inApp) {
      event.preventDefault();
      this.showInAppBrowserNotice = true;
    }
  }

  handleSocialClick(platform: 'instagram' | 'tiktok', url: string): void {
    this.analytics.trackLinksButtonClick(`red_social_${platform}`, url);
  }

  dismissNotice(): void {
    this.showInAppBrowserNotice = false;
  }

  private isInAppBrowser(): boolean {
    const ua = navigator.userAgent || '';
    return /BytedanceWebview|musical_ly|TikTok|FBAN|FBAV|Instagram|Line\/|MicroMessenger/i.test(ua);
  }
}
