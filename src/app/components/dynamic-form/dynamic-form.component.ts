import { Component, Input, NgZone, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { FormControlService } from 'src/app/services/forms/form-control.service';
import { BaseField } from '../../models/forms/base-field';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ FormControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() fields: BaseField<string>[] | null = [];
  form!: FormGroup;

  constructor(
    private qcs: FormControlService,
    private apiService: ApiService,
    private messageService: MessageService,
    private router: Router,
    private ref: DynamicDialogRef,
    private tokenService: TokenService,
    private ngZone: NgZone,
    private storageService: StorageService
    ) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.fields as BaseField<string>[]);
  }

  onSubmit() {
    const data = this.form.value;
    let id: any;
    let flag: any;
    if(data.id != undefined){
      flag = true;
      id = data.id;
      delete data.id;
    }
    const table = data.table;
    delete data.table;
    if(!(this.isLogged())){
      this.messageService.add({id: 'dynf', severity:'error', summary:'Expirated', detail:'Session expirated, please login again.'});
    }else{
      switch(table){
        case 'person': {
          if(data.imgUrl.search('data') != -1){
            this.storageService.upImg(null, data.imgUrl, 1).then( urlImg =>{
              data.imgUrl = urlImg;
              this.apiService.updatePerson(id, data).subscribe( info => { this.toast(table) } );
            });
          }else{
            this.apiService.updatePerson(id, data).subscribe( info => { this.toast(table) } );
          }
          break;
        }
        case 'experience': {
          if(data.imgUrl.search('data') != -1){
            this.storageService.upImg(data.company, data.imgUrl, 2).then( urlImg =>{
              data.imgUrl = urlImg;
              if(flag){
                this.apiService.updateExperience(id, data).subscribe( info => { this.toast(table) } );
              }else{
                this.apiService.saveExperience(data).subscribe( info => { this.toast(table) } );
              }
            });
          }else{
            if(flag){
              this.apiService.updateExperience(id, data).subscribe( info => { this.toast(table) } );
            }else{
              this.apiService.saveExperience(data).subscribe( info => { this.toast(table) } );
            }
          }
          break;
        }
        case 'education': {
          if(flag){
            this.apiService.updateEducation(id, data).subscribe( info => { this.toast(table) } );
          }else{
            this.apiService.saveEducation(data).subscribe( info => { this.toast(table) } );
          }
          break;
        }
        case 'project': {
          if(data.imgUrl.search('data') != -1){
            this.storageService.upImg(data.name, data.imgUrl, 3).then( urlImg =>{
              data.imgUrl = urlImg;
              if(flag){
                this.apiService.updateProject(id, data).subscribe( info => { this.toast(table) } );
              }else{
                this.apiService.saveProject(data).subscribe( info => { this.toast(table) } );
              }
            });
          }else{
            if(flag){
              this.apiService.updateProject(id, data).subscribe( info => { this.toast(table) } );
            }else{
              this.apiService.saveProject(data).subscribe( info => { this.toast(table) } );
            }
          }
          break;
        }
        case 'skill': {
          if(data.imgUrl){
            this.storageService.upImg(data.name, data.imgUrl, 4).then( urlImg =>{
              data.imgUrl = urlImg;
              if(data.imgUrl != null){
                this.apiService.saveSkill(data).subscribe( info => { this.toast(table) } );
              }
            });
          }else{
            this.apiService.saveSkill(data).subscribe( info => { this.toast(table) } );
          }
          break;
        }
      }
    }
  }

  toast(table:any){
    this.messageService.add({key: 'dynf', severity:'success', summary: table+' info saved', detail: 'Wait or close this toast to reload.', life: 3000});
    this.form.disable();
  }

  onClose(){
    this.ref.close();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.ngZone.run( () => { this.router.navigate([this.router.url]) } );
  }

  isLogged(){
    return this.tokenService.isLogged();
  }
}