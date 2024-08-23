import { Injectable } from '@angular/core';
import { IElement } from '../interfaces/ielement';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  elements: IElement[] = [];

  isIntoView(Elements: IElement[]): IElement[] {
    this.elements = Elements;

    this.elements.forEach((element, index) => {
      if (element.elementRef) {
        const rect = element.elementRef.nativeElement.getBoundingClientRect();
        const topShown = rect.top >= 0;
        const bottomShown = rect.bottom <= window.innerHeight;
        element.isVisible = topShown && bottomShown;
      }

      if (Elements[index]?.isVisible != element.isVisible) {
        Elements[index] = {
          index: element.index,
          name: element.name,
          elementRef: element.elementRef,
          isVisible: element.isVisible,
          looped: element.looped,
        }
      }
    });
    
    return Elements;
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
}
