import { Injectable } from '@angular/core';
import { BaseField } from 'src/app/models/forms/base-field';
import { TextField } from 'src/app/models/forms/text-field';
import { TextareaField } from 'src/app/models/forms/textarea-field';
import { Observable, of } from 'rxjs';
import { Person } from 'src/app/models/person';
import { NumberField } from 'src/app/models/forms/number-field';

@Injectable()
export class PersonFormService {
  constructor() { }

  public getPersonForm(person:Person): Observable<BaseField<any>[]>{
    const fields: BaseField<string | number>[] = [

      new NumberField({
        key: 'id',
        label: 'id',
        value: person.id,
        disabled: true,
        required: false
      }),

      new TextField({
        key: 'title',
        label: 'Title',
        value: person.title,
        required: true,
        order: 1
      }),

      new TextField({
        key: 'location',
        label: 'Location',
        value: person.location,
        required: true,
        order: 2
      }),

      new TextareaField({
        key: 'about',
        label: 'About',
        value: person.about,
        required: true,
        order: 3
      })
    ];

    return of(fields.sort((a, b) => a.order - b.order));
  }

}
