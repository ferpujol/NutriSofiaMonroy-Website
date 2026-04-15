import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { SobreMiComponent } from '../../components/sobre-mi/sobre-mi.component';
import { EpigeneticaComponent } from '../../components/epigenetica/epigenetica.component';
import { RedesSocialesComponent } from '../../components/redes-sociales/redes-sociales.component';
import { AgendaComponent } from '../../components/agenda/agenda.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    HeroComponent,
    SobreMiComponent,
    EpigeneticaComponent,
    RedesSocialesComponent,
    AgendaComponent,
    FooterComponent,
  ],
  template: `
    <app-header />
    <main>
      <app-hero />
      <app-sobre-mi />
      <app-epigenetica />
      <app-agenda />
      <app-redes-sociales />
    </main>
    <app-footer />
  `,
})
export class HomeComponent {}
