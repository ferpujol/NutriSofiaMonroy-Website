import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.scss'
})
export class SobreMiComponent {
  credentials = [
    { icon: '🎓', title: 'Licenciatura en Nutrición', description: 'Formación profesional con enfoque clínico y metabólico.' },
    { icon: '🦋', title: 'Especialista en Tiroides', description: 'Enfoque en Hashimoto, hipotiroidismo e hipertiroidismo.' },
    { icon: '🧬', title: 'Epigenética Nutricional', description: 'Cómo la alimentación modula la expresión de tus genes.' },
    { icon: '💚', title: 'Enfoque Integral', description: 'Planes personalizados que conectan nutrición, hormonas y bienestar.' },
  ];
}
