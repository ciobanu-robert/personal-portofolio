import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-page',
  standalone: false,
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
})
export class PageComponent {  
  hidden = false;
  scroll = 0;
  scrollPercentage = 0;
  
  @HostListener('window:scroll', ['$event']) 
  onWindowScroll() {
    const scrollOffset = window.scrollY || 0;
    
    if (scrollOffset > this.scroll) {
      this.hidden = true;
    } else {
      this.hidden = false;
    }
    this.scroll = scrollOffset;
  }

  // @HostListener('window:beforeunload', ['$event'])
  // onRefresh() {
  //   window.scrollTo(0, 0);
  //   this.hidden = false;
  // }

}
