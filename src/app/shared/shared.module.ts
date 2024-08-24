import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipComponent } from './chip/chip.component';
import { CardComponent } from './card/card.component';
import { PanelComponent } from './panel/panel.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';



@NgModule({
  declarations: [
    NavigationBarComponent,
    ChipComponent,
    CardComponent,
    PanelComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavigationBarComponent,
    ChipComponent,
    CardComponent,
    PanelComponent
  ],
})
export class SharedModule { }
