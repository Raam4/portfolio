import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { LoginComponent } from './components/login/login.component';

import { PersGuardService } from './services/guards/pers-guard.service';
import { LoginGuard } from './services/guards/login.guard';

const routes: Routes = [
  {
    path: 'portfolio',
    component: PortfolioComponent,
    children:[
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'experience', component: ExperienceComponent},
      {path: 'education', component: EducationComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: 'skills', component: SkillsComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home'}
    ]
  },
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path: '', redirectTo: 'portolio/home', pathMatch: 'full'},
  {path: '**', redirectTo: 'portfolio/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
