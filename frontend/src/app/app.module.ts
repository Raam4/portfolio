import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { PersonalComponent } from './components/personal/personal.component';
import { EducacionComponent } from './components/edunexp/educacion.component';
import { ExperienciaComponent } from './components/edunexp/experiencia.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonalComponent,
    EducacionComponent,
    ExperienciaComponent,
    SkillsComponent,
    ProyectosComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
