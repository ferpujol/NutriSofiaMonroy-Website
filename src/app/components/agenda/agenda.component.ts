import { Component } from '@angular/core';
import { SITE_CONFIG } from '../../shared/config';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.scss'
})
export class AgendaComponent {
  whatsappUrl = SITE_CONFIG.whatsappUrl;
}
