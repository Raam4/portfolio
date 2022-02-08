import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';
import { SharedModule } from 'primeng/api';
import { ImageModule } from 'primeng/image';
import { FieldsetModule } from 'primeng/fieldset';
import { ScrollTopModule } from 'primeng/scrolltop';
import { PanelModule } from 'primeng/panel';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';

import { AppComponent } from './app.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    AboutComponent,
    HomeComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'experience', component: ExperienceComponent},
      {path: 'education', component: EducationComponent},
      {path: 'projects', component: ProjectsComponent}
    ]),
    BrowserAnimationsModule,
    ButtonModule,
    MenubarModule,
    TabViewModule,
    SharedModule,
    ImageModule,
    FieldsetModule,
    ScrollTopModule,
    PanelModule,
    TimelineModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
