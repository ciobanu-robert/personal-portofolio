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
      name: 'Calendar app',
      date: '08/2024 - 08/2024',
      image: '/assets/img/calendar-app.png',
      description: 
        'A sleek and intuitive calendar app crafted for ' +
        'effortless scheduling, timely reminders, and ' + 
        'comprehensive event management. Stay organized ' +
        'with a clear overview of all your important dates, ' +
        'appointments, and tasks, all accessible in one ' +
        'convenient place.',
      technologies: ['Angular'],
      link: 'https://github.com/ciobanu-robert/calendar-app'
    },
    {
      name: 'Portofolio',
      date: '08/2024 - Present',
      image: '/assets/img/portofolio.png',
      description: 
        'This portfolio project is designed to showcase my ' +
        'skills, experience, and accomplishments as a ' +
        'developer. It highlights my expertise in various ' +
        'technologies and tools through a collection of ' +
        'projects, and code samples. With a clean and ' +
        'professional design, the portfolio provides a clear ' +
        'overview of my abilities, including web development, ' +
        'programming languages, and problem-solving.',
      technologies: ['Angular'],
      link: 'https://github.com/ciobanu-robert/portofolio'
    },
  ];
}
