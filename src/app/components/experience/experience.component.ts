import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Experience } from 'src/app/models/experience';
import { ApiService } from 'src/app/services/api.service';
import { ExperienceForm } from './experience-form.component';
import { DialogService } from 'primeng/dynamicdialog';
import { ExperienceFormService } from 'src/app/services/forms/experience-form.service';
import { Observable } from 'rxjs';
import { BaseField } from 'src/app/models/forms/base-field';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ExperienceComponent implements OnInit {

  fields$: Observable<BaseField<any>[]>;

  jobs: Experience[] = [];

  constructor(private apiService:ApiService, public dialogService: DialogService, private fServ: ExperienceFormService) { }

  ngOnInit(): void {
    this.loadExperience();
  }

  show() {
    const ref = this.dialogService.open(ExperienceForm, {
        data: {
          fields: this.fields$,
        },
        header: 'Edit experience info',
        contentStyle: {
          "display":"flex",
          "justify-content":"center"
        }
    });
  }

  loadExperience(): void{
    this.apiService.listExperience().subscribe(
      data => {
        this.jobs = data;
      }
    );
  }

    /*this.jobs = [
      {
        place: 'Casa Ferracioli S.A.',
        logo: 'assets/images/logos/ferracioli-logo.gif',
        logoClass: 'ferracioli-logo',
        position: 'Employee',
        description: 'I work in this company as a help desk, but I carry out various tasks related to IT; control of the status of servers,\
         backups, software and hardware maintenance, network maintenance, among others. Anyway, user support is my main task.\
         I currently work with four colleagues and a supervisor, and we are in charge of around 120 workstations and more than 10 physical\
         servers, where we have even more virtual servers. I\'m continually learning a lot about IT maintenance, and how to work as\
         a team with my colleagues, especially when unexpected situations arise or we have to carry out large maintenance operations.',
        placeTime: 'City of Neuquén | June 2019 - Present'
      },
      {
        place: 'Betel Tu Estilo Neuquén',
        logo: 'assets/images/logos/betel-logo.jpg',
        logoClass: 'betel-logo',
        position: 'Owner',
        description: 'Clothing store that I opened with the help of my parents. I served the public in it for a year\
         and a half, while I did the accounting, finances and taxes. I learned a lot about how to open, maintain and\
         take care of a business. I also learned how to treat customers and how to sell a product to them.\
         I still manage the store to this day, but I don\'t work on site.',
        placeTime: 'City of Neuquén | December 2017 - Present'
      }
    ];*/

}
