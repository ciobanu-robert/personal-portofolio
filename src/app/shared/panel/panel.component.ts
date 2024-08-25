import { Component, Input } from '@angular/core';
import { IProject } from '../../interfaces/iproject';

@Component({
  selector: 'app-panel',
  standalone: false,
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent {
@Input() project: IProject; 
}
