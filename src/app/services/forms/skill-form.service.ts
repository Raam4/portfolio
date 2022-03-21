import { Injectable } from '@angular/core';
import { BaseField } from 'src/app/models/forms/base-field';
import { TextField } from 'src/app/models/forms/text-field';
import { Observable, of } from 'rxjs';
import { Skill } from 'src/app/models/skill';
import { NumberField } from 'src/app/models/forms/number-field';
import { ObjectField } from 'src/app/models/forms/object-field';
import { FileField } from 'src/app/models/forms/file-field';
import { SelectField } from 'src/app/models/forms/select-field';

@Injectable({
  providedIn: 'root'
})
export class SkillFormService {

  constructor() { }
  
  public getSkillForm(skill: Skill | null): Observable<BaseField<any>[]>{

    const fields: BaseField<string | number | Int8Array | {} | null>[] = [

      new TextField({
        key: 'name',
        label: 'Name',
        required: true,
        order: 1
      }),

      new SelectField({
        key: 'type',
        label: 'Type',
        options: [
          {key: 'soft', value: 'Softskill'},
          {key: 'back', value: 'Backend'},
          {key: 'front', value: 'Frontend'},
          {key: 'tool', value: 'Tool'}
        ],
        required: true,
        order: 2
      }),

      new FileField({
        key: 'icon',
        label: 'Icon',
        required: true,
        order: 3
      }),

      new TextField({
        key: 'table',
        value: 'skill',
        required: false,
        order: 7
      }),

      new NumberField({
        key: 'id',
        required: false,
        order: 8
      })

    ];

    if(skill != null){
      fields.forEach(element => {
        switch(element.key){
          case 'id':{ element.value = skill.id; break; }
          case 'name':{ element.value = skill.name; break; }
          case 'type':{ element.value = skill.type; break; }
          case 'icon':{ element.value = skill.icon; break; }
        }
      });
    }else{
      fields.pop();
      fields.push(
        new ObjectField({
          key: 'person',
          value: {'id':'1'},
          required: false,
          order: 8
        })
      );
    }
    
    return of(fields.sort((a, b) => a.order - b.order));
  }

}