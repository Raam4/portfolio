import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BaseField } from 'src/app/models/forms/base-field';

@Injectable()
export class FormControlService {
  
  constructor() { }

  toFormGroup(fields: BaseField<string>[] ) {
    const group: any = {};

    fields.forEach(field => {
      group[field.key] = field.required ? new FormControl(field.value || '', Validators.required) : new FormControl(field.value || '');
      if(field.disabled){ group[field.key].disable() };
    });
    
    return new FormGroup(group);
  }
}