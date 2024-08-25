import { Component } from '@angular/core';
import { IProject } from '../../interfaces/iproject';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: IProject[] = [
    {
      name: 'Compare RGM',
      date: '02/2024 - 05/2024',
      image: '/assets/img/compare-rgm.png',
      description: 
      'The Compare RGM platform offers companies ' +
      'the ability quickly and efficiently compare ' +
      'products and services offered by competitors, ' +
      'giving them the freedom to make informed ' +
      'decisions and identify the best options according ' +
      'to their needs and preferences.',
      technologies: ['Angular', 'Node.js', 'MongoDB'],
      link: 'https://github.com/ciobanu-robert/CompareRGM'
    },
    {
      name: 'Compare RGM',
      date: '02/2024 - 05/2024',
      image: '/assets/img/compare-rgm.png',
      description: 
      'The Compare RGM platform offers companies ' +
      'the ability quickly and efficiently compare ' +
      'products and services offered by competitors, ' +
      'giving them the freedom to make informed ' +
      'decisions and identify the best options according ' +
      'to their needs and preferences.',
      technologies: ['Angular', 'Node.js', 'MongoDB'],
      link: 'https://github.com/ciobanu-robert/CompareRGM'
    },
    {
      name: 'Compare RGM',
      date: '02/2024 - 05/2024',
      image: '/assets/img/compare-rgm.png',
      description: 
      'The Compare RGM platform offers companies ' +
      'the ability quickly and efficiently compare ' +
      'products and services offered by competitors, ' +
      'giving them the freedom to make informed ' +
      'decisions and identify the best options according ' +
      'to their needs and preferences.',
      technologies: ['Angular', 'Node.js', 'MongoDB'],
      link: 'https://github.com/ciobanu-robert/CompareRGM'
    },
  ];
}
