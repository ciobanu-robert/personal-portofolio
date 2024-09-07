import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { IElement } from '../../interfaces/ielement';

@Component({
  selector: 'app-page',
  standalone: false,
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
})
export class PageComponent {  
  constructor(private scrollService: ScrollService) {}

  @ViewChild('home') home: ElementRef<HTMLElement>;
  @ViewChild('about') about: ElementRef<HTMLElement>;
  @ViewChild('skills') skills: ElementRef<HTMLElement>;
  @ViewChild('projects') projects: ElementRef<HTMLElement>;
  @ViewChild('contact') contact: ElementRef<HTMLElement>;

  hidden = false;
  scroll = 0;
  scrollPercentage = 0;
  name = 'page';
  elements: IElement[] = [];
  
  @HostListener('window:scroll', ['$event']) 
  onWindowScroll() {
    const scrollOffset = window.scrollY || 0;
    
    if (scrollOffset > this.scroll) {
      this.hidden = true;
    } else {
      this.hidden = false;
    }
    this.scroll = scrollOffset;

    if (this.elements.length == 0) {
      this.elements = this.initializeElements();
    }
    this.elements = this.scrollService.isIntoView(this.elements, this.name);
  }

  @HostListener('window:beforeunload', ['$event'])
  onRefresh() {
    window.scrollTo(0, 0);
    this.hidden = false;
  }

  scrollIntoView(el: HTMLElement) {
    el.scrollIntoView({behavior: "smooth"});
  }

  initializeElements() {
    return [
      {
        index: 0,
        name: 'home',
        elementRef: this.home,
        isVisible: false,
        looped: false,
      },
      {
        index: 0,
        name: 'about',
        elementRef: this.about,
        isVisible: false,
        looped: false,
      },
      {
        index: 0,
        name: 'skills',
        elementRef: this.skills,
        isVisible: false,
        looped: false,
      },
      {
        index: 0,
        name: 'projects',
        elementRef: this.projects,
        isVisible: false,
        looped: false,
      },
      {
        index: 0,
        name: 'contact',
        elementRef: this.contact,
        isVisible: false,
        looped: false,
      },
    ];
  }
}
