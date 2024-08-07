import { Component, HostListener } from '@angular/core';
import { getWindow } from 'ssr-window';

@Component({
  selector: 'app-page',
  standalone: false,
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
})
export class PageComponent {
  hidden = false;
  scroll = 0;

  @HostListener("window:scroll", []) onWindowScroll() {
    const verticalOffset = getWindow().pageYOffset 
          || document.documentElement.scrollTop 
          || document.body.scrollTop || 0;
    
    if (verticalOffset > this.scroll) {
      this.hidden = true;
    } else {
      this.hidden = false;
    }
    this.scroll = verticalOffset;
  }
}
