import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';
import { MessageService, SharedModule } from 'primeng/api';
import { ImageModule } from 'primeng/image';
import { FieldsetModule } from 'primeng/fieldset';
import { ScrollTopModule } from 'primeng/scrolltop';
import { PanelModule } from 'primeng/panel';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { DividerModule } from 'primeng/divider';
import { ChipModule } from 'primeng/chip';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';

import { ApiService } from './services/api.service';
import { interceptorProvider } from './services/interceptors/pers-interceptor.service';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectComponent } from './components/project/project.component';
import { SkillsComponent } from './components/skills/skills.component';
import { LoginComponent } from './components/login/login.component';
import { DynamicFieldComponent } from './components/dynamic-field/dynamic-field.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeForm } from './components/home/home-form.component';
import { ExperienceForm } from './components/experience/experience-form.component';
import { EducationForm } from './components/education/education-form.component';
import { ProjectForm } from './components/project/project-form-component';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    MenubarComponent,
    AboutComponent,
    HomeComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectComponent,
    SkillsComponent,
    LoginComponent,
    HomeForm,
    ExperienceForm,
    EducationForm,
    ProjectForm,
    DynamicFieldComponent,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
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
    CarouselModule,
    DividerModule,
    ChipModule,
    TooltipModule,
    InputTextModule,
    InputTextareaModule,
    ToastModule,
    DynamicDialogModule,
    InputNumberModule,
    CalendarModule
  ],
  providers: [
    ApiService,
    interceptorProvider,
    MessageService,
    DialogService,
    AuthService,
    TokenService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
