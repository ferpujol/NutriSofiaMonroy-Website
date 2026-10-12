import { Injectable } from '@angular/core';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  /**
   * Envía un evento a Google Analytics (gtag.js)
   */
  trackEvent(eventName: string, params: Record<string, any> = {}): void {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }
  }

  /**
   * Registra un clic en los botones de la página /links
   */
  trackLinksButtonClick(buttonName: string, destinationUrl?: string, extraParams: Record<string, any> = {}): void {
    this.trackEvent('links_button_click', {
      button_name: buttonName,
      destination_url: destinationUrl,
      ...extraParams,
    });
  }
}
