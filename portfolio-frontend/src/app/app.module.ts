import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { GalleriaModule } from 'primeng/galleria';
import { DividerModule } from 'primeng/divider';
import { ChipModule } from 'primeng/chip';
import { TooltipModule } from 'primeng/tooltip';

import { ApiService } from './services/api.service';

import { AppComponent } from './app.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    AboutComponent,
    HomeComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    SkillsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'experience', component: ExperienceComponent},
      {path: 'education', component: EducationComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: 'skills', component: SkillsComponent},
      {path: 'login', component: LoginComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: '**', redirectTo: '/home'}
    ]),
    HttpClientModule,
    ReactiveFormsModule,
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
    CardModule,
    GalleriaModule,
    DividerModule,
    ChipModule,
    TooltipModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
