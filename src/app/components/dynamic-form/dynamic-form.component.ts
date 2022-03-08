import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlService } from 'src/app/services/forms/form-control.service';

import { BaseField } from '../../models/forms/base-field';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ FormControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() fields: BaseField<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private qcs: FormControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.fields as BaseField<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}