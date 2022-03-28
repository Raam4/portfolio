import { Component, NgZone, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Observable, tap } from 'rxjs';
import { Education } from 'src/app/models/education';
import { BaseField } from 'src/app/models/forms/base-field';
import { ApiService } from 'src/app/services/api.service';
import { EducationFormService } from 'src/app/services/forms/education-form.service';
import { TokenService } from 'src/app/services/token.service';
import { TempFormComponent } from '../dynamic-form/temp-form.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EducationComponent implements OnInit {

  $fields: Observable<BaseField<any>[]>;

  $edu: Observable<Education[]>;

  constructor(
    private apiService: ApiService,
    private dialogService: DialogService,
    private fServ: EducationFormService,
    private tokenService: TokenService,
    private messageService: MessageService,
    private router: Router,
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
    this.loadEducation();
  }

  loadEducation(){
    this.$edu = this.apiService.listEducation().pipe(
      tap(data => {
        data.sort((a, b) => 
          new Date(b.dateStart).getTime() - new Date(a.dateStart).getTime()
        );
      })
    );
  }

  editInfo(education: Education) {
    this.$fields = this.fServ.getEducationForm(education);
    const ref = this.dialogService.open(TempFormComponent, {
        data: {
          fields: this.$fields
        },
        header: 'Edit education info',
        contentStyle: {
          "display":"flex",
          "justify-content":"center"
        }
    });
  }

  newEducation(){
    this.$fields = this.fServ.getEducationForm(null);
    const ref = this.dialogService.open(TempFormComponent, {
      data: {
        fields: this.$fields
      },
      header: 'Add new education item',
      contentStyle: {
        "display":"flex",
        "justify-content":"center"
      }
    });
  }

  deleteEducation(id: any){
    this.apiService.deleteEducation(id).subscribe({
      next: (data) => {
        this.messageService.add({key: 'edu', severity:'warn', summary: data.message, detail: 'Wait or close this toast to reload.', life: 3000});
      },
      error: (err) => {
        this.messageService.add({key: 'edu', severity:'warn', summary: 'Error', detail: `${err.error.message || err.error.error}`, life: 3000});
      }
    });
  }

  toastClose(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.ngZone.run( () => { this.router.navigate([this.router.url]) } );
  }

  isLogged(){
    return this.tokenService.isLogged();
  }
}
