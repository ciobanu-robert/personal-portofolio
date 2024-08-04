import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';



@NgModule({
  declarations: [
    PageComponent,
    NavigationBarComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PageComponent,
  ]
})
export class UserModule { }
