import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.scss'
})
export class SobreMiComponent {
  credentials = [
    { icon: '🎓', title: 'Licenciatura en Nutrición', description: 'Formación profesional con enfoque clínico y metabólico.' },
    { icon: '🏥', title: 'Medicina Funcional', description: 'Enfoque integral que busca la raíz de los desequilibrios de salud.' },
    { icon: '🧬', title: 'Epigenética Nutricional', description: 'Cómo la alimentación modula la expresión de tus genes.' },
    { icon: '💚', title: 'Planes Personalizados', description: 'Tratamientos individualizados que consideran tu bioquímica única.' },
  ];
}
