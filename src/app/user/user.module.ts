import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ChipComponent } from './shared/chip/chip.component';
import { SkillsComponent } from './skills/skills.component';
import { CardComponent } from './shared/card/card.component';

@NgModule({
  declarations: [
    PageComponent,
    NavigationBarComponent,
    HomeComponent,
    AboutComponent,
    ChipComponent,
    SkillsComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PageComponent,
  ]
})
export class UserModule { }
