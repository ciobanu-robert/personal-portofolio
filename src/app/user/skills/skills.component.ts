import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { IElement } from '../../interfaces/ielement';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  constructor(public scroll: ScrollService) {}

  name = 'skills';
  
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
  
  @ViewChild('frontend') frontend: ElementRef<HTMLElement>;
  @ViewChild('backend') backend: ElementRef<HTMLElement>;
  @ViewChild('miscellaneous') miscellaneous: ElementRef<HTMLElement>;

  elements: IElement[] = [];

  @HostListener('window:scroll', ['$event'])
  scrollEvent() {
    if (this.elements.length == 0) {
      this.elements = this.initializeElements();
    }
    this.elements = this.scroll.isIntoView(this.elements, 'skills');
  }

  initializeElements() {
    return [
      {
        index: 0,
        name: 'frontend',
        elementRef: this.frontend,
        isVisible: false,
        looped: false,
      },
      {
        index: 1,
        name: 'backend',
        elementRef: this.backend,
        isVisible: false,
        looped: false,
      },
      {
        index: 2,
        name: 'miscellaneous',
        elementRef: this.miscellaneous,
        isVisible: false,
        looped: false,
      },
    ];
  }
}
