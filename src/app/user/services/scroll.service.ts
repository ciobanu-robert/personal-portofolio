import { Injectable } from '@angular/core';
import { IElement } from '../interfaces/ielement';
import { IElementsObject } from '../interfaces/ielementsObject';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  elementsObject: IElementsObject = {
    about: [],
    skills: [],
  };

  isIntoView(Elements: IElement[], name: string): IElement[] {
    const elements = Elements;

    elements.forEach((element, index) => {
      if (element.elementRef) {
        const rect = 
          element.elementRef.nativeElement
          .getBoundingClientRect();
        const topShown = rect.top >= 0;
        const bottomShown = 
          rect.bottom <= window.innerHeight;
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

    switch (name) {
      case 'about':
        this.elementsObject.about = Elements;
        break;
      case 'string':
        this.elementsObject.skills = Elements;
        break;
    }
    return Elements;
  }

  findElementAndCheckVisibility(elementName: string, name: string) {
    let elements: IElement[] = []

    switch (name) {
      case 'about':
        elements = this.elementsObject.about;
        break;
      case 'skills':
        elements = this.elementsObject.skills;
        break;
    }

    const elementFound: IElement | undefined = 
      elements.find(element =>
        element.name === elementName
      );

      if (elementFound?.looped) {
        return 'visible';
      }
      if (elementFound?.isVisible) {
        elements[elementFound.index].looped = true;
        return 'visible'
      }

      return 'not-visible';
  }
}
