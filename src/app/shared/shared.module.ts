import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipComponent } from './chip/chip.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    ChipComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ChipComponent,
    CardComponent,
  ],
})
export class SharedModule { }
