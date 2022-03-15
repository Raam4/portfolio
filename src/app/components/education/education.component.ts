import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Observable, tap } from 'rxjs';
import { Education } from 'src/app/models/education';
import { BaseField } from 'src/app/models/forms/base-field';
import { ApiService } from 'src/app/services/api.service';
import { EducationFormService } from 'src/app/services/forms/education-form.service';
import { TokenService } from 'src/app/services/token.service';
import { EducationForm } from './education-form.component';

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
    private router: Router
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
    const ref = this.dialogService.open(EducationForm, {
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
    const ref = this.dialogService.open(EducationForm, {
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
    this.apiService.deleteEducation(id).subscribe(
      data => {
        this.messageService.add({id: 'edu', severity:'warn', summary: data.message, detail: 'Wait or close this toast to reload.', life: 3000});
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
