import { Injectable } from '@angular/core';
import { BaseField } from 'src/app/models/forms/base-field';
import { TextField } from 'src/app/models/forms/text-field';
import { Observable, of } from 'rxjs';
import { NumberField } from 'src/app/models/forms/number-field';
import { ObjectField } from 'src/app/models/forms/object-field';
import { FileField } from 'src/app/models/forms/file-field';

@Injectable({
  providedIn: 'root'
})
export class SkillFormService {

  constructor() { }
  
  public getSkillForm(type:string): Observable<BaseField<any>[]>{

    const fields: BaseField<string | number | {} | null>[] = [

      new TextField({
        key: 'name',
        label: 'Name',
        required: true,
        order: 1
      }),

      new TextField({
        key: 'type',
        label: 'Type',
        value: type,
        order: 2
      }),

      new TextField({
        key: 'table',
        value: 'skill',
        order: 4
      }),

      new NumberField({
        key: 'id',
        required: false,
        order: 5
      }),

      new ObjectField({
        key: 'person',
        value: {'id':'1'},
        required: false,
        order: 6
      })

    ];

    if(type != 'soft'){
      fields.push(
        new FileField({
          key: 'imgUrl',
          label: 'imgUrl',
          required: true,
          order: 3
        })
      );
    }
    
    return of(fields.sort((a, b) => a.order - b.order));
  }

}