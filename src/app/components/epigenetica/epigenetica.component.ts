import { Component } from '@angular/core';

@Component({
  selector: 'app-epigenetica',
  templateUrl: './epigenetica.component.html',
  styleUrl: './epigenetica.component.scss'
})
export class EpigeneticaComponent {
  features = [
    {
      icon: '🧬',
      title: 'Análisis No Invasivo',
      description: 'Solo necesitamos una muestra de cabello para digitalizar tu información epigenética y obtener un panorama completo de tu salud.'
    },
    {
      icon: '⚡',
      title: 'Resultados Rápidos',
      description: 'En minutos obtenemos información valiosa sobre deficiencias nutricionales, intolerancias alimentarias y desequilibrios metabólicos.'
    },
    {
      icon: '🎯',
      title: 'Plan Personalizado',
      description: 'Con base en tus resultados, diseño un protocolo nutricional específico utilizando la metodología de las 5 Rs de medicina funcional.'
    },
    {
      icon: '🌱',
      title: 'Optimiza tu Salud',
      description: 'Identifica qué alimentos, nutrientes y hábitos necesitas para activar tus genes hacia el bienestar y la vitalidad óptima.'
    }
  ];

  benefits = [
    'Identificación de deficiencias nutricionales',
    'Detección de intolerancias y sensibilidades alimentarias',
    'Análisis de desequilibrios metabólicos',
    'Evaluación de estrés oxidativo y toxicidad',
    'Recomendaciones de suplementación personalizada',
    'Plan nutricional basado en tu bioquímica única'
  ];
}
