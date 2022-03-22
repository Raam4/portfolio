import { Component, NgZone, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Observable, tap } from 'rxjs';
import { BaseField } from 'src/app/models/forms/base-field';
import { Project } from 'src/app/models/project';
import { ApiService } from 'src/app/services/api.service';
import { ProjectFormService } from 'src/app/services/forms/project-form.service';
import { TokenService } from 'src/app/services/token.service';
import { TempFormComponent } from '../dynamic-form/temp-form.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectComponent implements OnInit {

  $fields: Observable<BaseField<any>[]>;
  
  $pro: Observable<Project[]>;
  
  constructor(
    private apiService:ApiService,
    private dialogService: DialogService,
    private fServ: ProjectFormService,
    private tokenService: TokenService,
    private messageService: MessageService,
    private router: Router,
    private ngZone: NgZone
    ) { }

  ngOnInit(): void {
    this.loadProject();
  }

  loadProject(){
    this.$pro = this.apiService.listProject().pipe(
      tap(data => {
        data.sort((a, b) => 
          b.dateYear - a.dateYear
        );
      })
    );
  }

  editInfo(project: Project) {
    this.$fields = this.fServ.getProjectForm(project);
    const ref = this.dialogService.open(TempFormComponent, {
        data: {
          fields: this.$fields
        },
        header: 'Edit project info',
        contentStyle: {
          "display":"flex",
          "justify-content":"center"
        }
    });
  }

  newProject(){
    this.$fields = this.fServ.getProjectForm(null);
    const ref = this.dialogService.open(TempFormComponent, {
      data: {
        fields: this.$fields
      },
      header: 'Add new project item',
      contentStyle: {
        "display":"flex",
        "justify-content":"center"
      }
    });
  }

  deleteProject(id: any){
    this.apiService.deleteProject(id).subscribe(
      data => {
        this.messageService.add({key: 'pro', severity:'warn', summary: data.message, detail: 'Wait or close this toast to reload.', life: 3000});
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
