import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
@Component({
  selector: 'app-navigation-bar',
  standalone: false,
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {
  constructor(public scroll: ScrollService) {}

  @Output() scrollHome = new EventEmitter();
  @Output() scrollAbout = new EventEmitter();
  @Output() scrollSkills = new EventEmitter();
  @Output() scrollProjects = new EventEmitter();
  @Output() scrollContact = new EventEmitter();

  onClickHome(event: Event) {
    this.scrollHome.emit('event');
  }
  onClickAbout(event: Event) {
    this.scrollAbout.emit('event');
  }
  onClickSkills(event: Event) {
    this.scrollSkills.emit('event');
  }
  onClickProjects(event: Event) {
    this.scrollProjects.emit('event');
  }
  onClickContact(event: Event) {
    this.scrollContact.emit('event');
  }
}
