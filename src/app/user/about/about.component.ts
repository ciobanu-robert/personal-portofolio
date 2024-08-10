import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';

import { IElement } from '../interfaces/ielement';


@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  @ViewChild('title', { static: false }) title: ElementRef<HTMLElement>;
  @ViewChild('img', { static: false }) img: ElementRef<HTMLElement>;

  elements: IElement[] = [];
  
  @HostListener('window:scroll', ['$event'])
  isIntoView() {
    const elements: IElement[] = [
      {
        name: 'title',
        elementRef: this.title,
        isVisible: false,
      },
      {
        name: 'img',
        elementRef: this.img,
        isVisible: false,
      },
    ];
    
    elements.forEach((element, index) => {
      if(element.elementRef) {
        const rect = element.elementRef.nativeElement.getBoundingClientRect();
        const topShown = rect.top >= 0;
        const bottomShown = rect.bottom <= window.innerHeight;
        element.isVisible = topShown && bottomShown;
      }

      if (this.elements[index]?.isVisible != element.isVisible) {
        this.elements[index] = {
          name: element.name,
          isVisible: element.isVisible,
        }
        console.log(this.elements[index])
      }
    });

    this.elements = elements;
  }

  findElementAndCheckVisibility(name: string) {
    const elementFound: IElement | undefined = 
      this.elements.find(element =>
        element.name === name
      );

      if (elementFound?.isVisible) {
        return 'visible'
      }
      return 'not-visible'
  }
}
