import { Component, NgZone, OnInit, ViewEncapsulation } from '@angular/core';
import { Experience } from 'src/app/models/experience';
import { ApiService } from 'src/app/services/api.service';
import { DialogService } from 'primeng/dynamicdialog';
import { ExperienceFormService } from 'src/app/services/forms/experience-form.service';
import { Observable, tap } from 'rxjs';
import { BaseField } from 'src/app/models/forms/base-field';
import { TokenService } from 'src/app/services/token.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { TempFormComponent } from '../dynamic-form/temp-form.component';

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
    private dialogService: DialogService,
    private fServ: ExperienceFormService,
    private tokenService: TokenService,
    private messageService: MessageService,
    private router: Router,
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
    this.loadExperience();
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

  editInfo(experience: Experience) {
    this.$fields = this.fServ.getExperienceForm(experience);
    const ref = this.dialogService.open(TempFormComponent, {
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
    const ref = this.dialogService.open(TempFormComponent, {
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

  deleteExperience(id: any){
    this.apiService.deleteExperience(id).subscribe(
      data => {
        this.messageService.add({key: 'xp', severity:'warn', summary: data.message, detail: 'Wait or close this toast to reload.', life: 3000});
      }
    );
  }

  toastClose(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.ngZone.run( () => { this.router.navigate([this.router.url]) } )
  }

  isLogged(){
    return this.tokenService.isLogged();
  }

}
