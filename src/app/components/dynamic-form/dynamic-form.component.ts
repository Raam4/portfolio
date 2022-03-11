import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { FormControlService } from 'src/app/services/forms/form-control.service';
import { BaseField } from '../../models/forms/base-field';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ FormControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() fields: BaseField<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private qcs: FormControlService, private apiService: ApiService, private messageService: MessageService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.fields as BaseField<string>[]);
  }

  onSubmit() {
    const data = this.form;
    this.payLoad = JSON.stringify(this.form.getRawValue());
    console.log(data.value.table);
    if(data.value.table == 'person'){
      let body = {title: data.value.title, location: data.value.location, about: data.value.about};
      console.log(data.value.id)
      this.apiService.updatePerson(data.value.id, body).subscribe(
        data => {
          this.messageService.add({severity:'success', summary:'Saved', detail:'Personal info saved'});
        }
      );
    }
  }
}