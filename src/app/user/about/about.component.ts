import { Component, ViewChild, ElementRef, HostListener, AfterContentChecked, ChangeDetectorRef } from '@angular/core';

import { IElement } from '../interfaces/ielement';


@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  @ViewChild('img', { static: false }) img: ElementRef<HTMLElement>;
  @ViewChild('aboutMe') aboutMe: ElementRef<HTMLElement>;
  @ViewChild('education') education: ElementRef<HTMLElement>;
  @ViewChild('experience') experience: ElementRef<HTMLElement>;

  elements: IElement[] = [];
  
  @HostListener('window:scroll', ['$event'])
  isIntoView() {
    let elements: IElement[];

    if (this.elements.length == 0) {
      elements = this.initializeElements();
    } else {
      elements = this.elements;
    }

    elements.forEach((element, index) => {
      if (element.elementRef) {
        const rect = element.elementRef.nativeElement.getBoundingClientRect();
        const topShown = rect.top >= 0;
        const bottomShown = rect.bottom <= window.innerHeight;
        element.isVisible = topShown && bottomShown;
      }

      if (this.elements[index]?.isVisible != element.isVisible) {
        this.elements[index] = {
          index: element.index,
          name: element.name,
          elementRef: element.elementRef,
          isVisible: element.isVisible,
          looped: element.looped,
        }
      }
    });
    

    this.animateText();
  }

  findElementAndCheckVisibility(name: string) {
    const elementFound: IElement | undefined = 
      this.elements.find(element =>
        element.name === name
      );

      if (elementFound?.looped) {
        return 'visible';
      }
      if (elementFound?.isVisible) {
        this.elements[elementFound.index].looped = true;
        return 'visible'
      }
      return 'not-visible';
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
