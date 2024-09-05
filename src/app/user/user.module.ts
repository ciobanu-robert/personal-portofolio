import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from "./contact/contact.component";

@NgModule({
  declarations: [
    PageComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
],
  exports: [
    PageComponent,
  ]
})
export class UserModule { }
