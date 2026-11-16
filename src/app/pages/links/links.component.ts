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
  recetarioUrl = '/recetario-saludable-navideno.pdf';
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
    this.handlePdfClick(event, 'ebook_hashimoto', this.ebookUrl, 'Ebook Hipotiroidismo de Hashimoto');
  }

  handleRecetarioClick(event: Event): void {
    this.handlePdfClick(event, 'recetario_navideno', this.recetarioUrl, 'Recetario Saludable Navideño');
  }

  handleSocialClick(platform: 'instagram' | 'tiktok', url: string): void {
    this.analytics.trackLinksButtonClick(`red_social_${platform}`, url);
  }

  dismissNotice(): void {
    this.showInAppBrowserNotice = false;
  }

  /** Mide la descarga del PDF y, dentro de apps (TikTok, Instagram…) que bloquean descargas, muestra el aviso. */
  private handlePdfClick(event: Event, buttonName: string, url: string, linkText: string): void {
    const inApp = this.isInAppBrowser();

    this.analytics.trackLinksButtonClick(buttonName, url, {
      blocked_by_in_app: inApp,
    });

    this.analytics.trackEvent('file_download', {
      file_name: url.replace(/^\//, ''),
      file_extension: 'pdf',
      link_text: linkText,
      blocked_by_in_app: inApp,
    });

    if (inApp) {
      event.preventDefault();
      this.showInAppBrowserNotice = true;
    }
  }

  private isInAppBrowser(): boolean {
    const ua = navigator.userAgent || '';
    return /BytedanceWebview|musical_ly|TikTok|FBAN|FBAV|Instagram|Line\/|MicroMessenger/i.test(ua);
  }
}
