import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';

import { IElement } from '../../interfaces/ielement';
import { ScrollService } from '../../services/scroll.service';


@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(public scroll: ScrollService) {}

  @ViewChild('img') img: ElementRef<HTMLElement>;
  @ViewChild('aboutMe') aboutMe: ElementRef<HTMLElement>;
  @ViewChild('education') education: ElementRef<HTMLElement>;
  @ViewChild('experience') experience: ElementRef<HTMLElement>;

  name = 'about';

  elements: IElement[] = [];
  
  @HostListener('window:scroll', ['$event'])
  scrollEvent() {
    if (this.elements.length == 0) {
      this.elements = this.initializeElements();
    }
    this.elements = this.scroll.isIntoView(this.elements, this.name);

    this.animateText()
  }

  animateText() {
    let textElement = this.elements.find(
      element => 
        element.name === 'about-me'
    );
    let textEl = this.aboutMe.nativeElement;
    const text = 
    'Recent graduate with a focus on web development ' +
    'using Angular. Proficient in HTML, CSS, JavaScript and TypeScript. ' +
    'Experienced in building dynamic and responsive web applications, ' +
    'emphasizing user experience and interface design. Strong ' +
    'problem-solving abilities, effective communication skills and a ' +
    'proactive learner open to new technologies and challenges. Eager ' +
    'to apply and expand technical expertise in innovative web ' +
    'development projects within a dynamic environment.';
    const textArray = text.split(' ');

    if (textElement?.isVisible && !textElement.looped) {
      this.elements[textElement.index].looped = true;
      textArray?.forEach((char, i) => {
        setTimeout(() => {
          textEl.append(char + ' ')
        }, i * 50);
      });
    }
  }

  initializeElements() {
    return [
      {
        index: 0,
        name: 'img',
        elementRef: this.img,
        isVisible: false,
        looped: false,
      },
      {
        index: 1,
        name: 'about-me',
        elementRef: this.aboutMe,
        isVisible: false,
        looped: false,
      },
      {
        index: 2,
        name: 'education',
        elementRef: this.education,
        isVisible: false,
        looped: false,
      },
      {
        index: 3,
        name: 'experience',
        elementRef: this.experience,
        isVisible: false,
        looped: false,
      },
    ];
  }
}
