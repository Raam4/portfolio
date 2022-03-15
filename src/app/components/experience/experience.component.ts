import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Experience } from 'src/app/models/experience';
import { ApiService } from 'src/app/services/api.service';
import { ExperienceForm } from './experience-form.component';
import { DialogService } from 'primeng/dynamicdialog';
import { ExperienceFormService } from 'src/app/services/forms/experience-form.service';
import { Observable, tap } from 'rxjs';
import { BaseField } from 'src/app/models/forms/base-field';
import { TokenService } from 'src/app/services/token.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ExperienceComponent implements OnInit {

  $fields: Observable<BaseField<any>[]>;

  $exp: Observable<Experience[]>;

  constructor(
    private apiService: ApiService,
    public dialogService: DialogService,
    private fServ: ExperienceFormService,
    private tokenService: TokenService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadExperience();
  }

  editInfo(experience: Experience) {
    this.$fields = this.fServ.getExperienceForm(experience);
    const ref = this.dialogService.open(ExperienceForm, {
        data: {
          fields: this.$fields
        },
        header: 'Edit experience info',
        contentStyle: {
          "display":"flex",
          "justify-content":"center"
        }
    });
  }

  newExperience(){
    this.$fields = this.fServ.getExperienceForm(null);
    const ref = this.dialogService.open(ExperienceForm, {
      data: {
        fields: this.$fields
      },
      header: 'Add new experience item',
      contentStyle: {
        "display":"flex",
        "justify-content":"center"
      }
    });
  }

  loadExperience(){
    this.$exp = this.apiService.listExperience().pipe(
      tap(data => {
        data.sort((a, b) => 
          new Date(b.dateStart).getTime() - new Date(a.dateStart).getTime()
        );
      })
    );
  }

  deleteExperience(id: any){
    this.apiService.deleteExperience(id).subscribe(
      data => {
        this.messageService.add({id: 'xp', severity:'warn', summary: data.message, detail: 'Wait or close this toast to reload.', life: 3000});
      }
    );
  }

  toastClose(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

  isLogged(){
    return this.tokenService.isLogged();
  }

}
