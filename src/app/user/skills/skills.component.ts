import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  frontendSkills = [
    'Angular',
    'HTML',
    'CSS',
    'SCSS',
    'JavaScript',
    'TypeScript',
    'Three.js',
  ];
  backendSkills = [
    'Node.js',
    'Express.js',
    'PHP',
    'MySQL',
    'MongoDB',
  ];
  miscellaneousSkills = [
    'Microsoft office',
    'Git',
    'GitHub',
    'Figma',
    'Java',
    'C#',
    'C++',
  ];
}
