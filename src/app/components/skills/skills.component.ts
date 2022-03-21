import { Component, NgZone, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';
import { BaseField } from 'src/app/models/forms/base-field';
import { Skill } from 'src/app/models/skill';
import { ApiService } from 'src/app/services/api.service';
import { SkillFormService } from 'src/app/services/forms/skill-form.service';
import { StorageService } from 'src/app/services/storage.service';
import { TokenService } from 'src/app/services/token.service';
import { SkillForm } from './skill-form.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SkillsComponent implements OnInit {

  $fields: Observable<BaseField<any>[]>;

  $skills: Observable<Skill[]>;

  constructor(
    private apiService:ApiService,
    private dialogService: DialogService,
    private fServ: SkillFormService,
    private tokenService: TokenService,
    private messageService: MessageService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.loadSkill();
  }

  loadSkill(): void{
    this.$skills = this.apiService.listSkill();
  }

  newSkill(){
    this.$fields = this.fServ.getSkillForm(null);
    const ref = this.dialogService.open(SkillForm, {
      data: {
        fields: this.$fields
      },
      header: 'Add new skill item',
      contentStyle: {
        "display":"flex",
        "justify-content":"center"
      }
    });
  }

  deleteSkill(id: any, name: any){
    this.apiService.deleteSkill(id).subscribe(
      data => {
        this.storageService.deleteImg(name);
        this.messageService.add({key: 'ski', severity:'warn', summary: data.message, detail: 'Skill deleted', life: 3000});
        this.loadSkill();
      }
    );
  }

  isLogged(){
    return this.tokenService.isLogged();
  }
}