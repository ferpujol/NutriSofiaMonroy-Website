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
      description: 'En pocos días obtenemos información valiosa sobre deficiencias nutricionales, intolerancias alimentarias y desequilibrios metabólicos.'
    },
    {
      icon: '🎯',
      title: 'Plan Personalizado',
      description: 'Con base en tus resultados epigenéticos, diseño un protocolo nutricional específico y personalizado para optimizar tu salud.'
    },
    {
      icon: '🌱',
      title: 'Optimiza tu Salud',
      description: 'Identifica qué alimentos, nutrientes y hábitos necesitas para activar tus genes hacia el bienestar y la vitalidad óptima.'
    }
  ];

  benefits = [
    'Identificación de nutrientes a optimizar',
    'Detección de sensibilidades alimentarias',
    'Análisis de desequilibrios metabólicos',
    'Análisis de la microbiota intestinal',
    'Medición de la carga electromagnética de tu cuerpo',
    'Evaluación del sistema inmunológico, metabólico y cardiovascular',
  ];
}
