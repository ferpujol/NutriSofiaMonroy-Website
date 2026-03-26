import { Component } from '@angular/core';

@Component({
  selector: 'app-epigenetica',
  templateUrl: './epigenetica.component.html',
  styleUrl: './epigenetica.component.scss'
})
export class EpigeneticaComponent {
  concepts = [
    {
      icon: '🧬',
      title: '¿Qué es la Epigenética?',
      description: 'Es la ciencia que estudia cómo factores externos, como la alimentación y el estilo de vida, pueden activar o silenciar genes sin cambiar tu ADN.'
    },
    {
      icon: '🥗',
      title: 'Nutrición y Genes',
      description: 'Los nutrientes que consumes envían señales a tus genes. Una dieta adecuada puede mejorar la expresión genética relacionada con tu metabolismo y hormonas.'
    },
    {
      icon: '🦋',
      title: 'Hormonas y Expresión Genética',
      description: 'Tus hormonas tiroideas influyen en miles de genes. A través de la nutrición epigenética, podemos optimizar esta comunicación celular.'
    },
    {
      icon: '🌱',
      title: 'Tu Poder de Cambio',
      description: 'No estás definida por tu genética. Con las decisiones nutricionales correctas, puedes influir positivamente en tu salud hormonal y bienestar general.'
    }
  ];
}
