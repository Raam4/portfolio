import { Injectable } from '@angular/core';
import { BaseField } from 'src/app/models/forms/base-field';
import { TextField } from 'src/app/models/forms/text-field';
import { TextareaField } from 'src/app/models/forms/textarea-field';
import { Observable, of } from 'rxjs';
import { Person } from 'src/app/models/person';
import { NumberField } from 'src/app/models/forms/number-field';
import { FileField } from 'src/app/models/forms/file-field';

@Injectable()
export class HomeFormService {

  constructor() { }
  
  public getPersonForm(person:Person): Observable<BaseField<any>[]>{

    const fields: BaseField<string | number | null>[] = [

      new TextField({
        key: 'table',
        value: 'person',
        required: false,
        order: 7
      }),

      new NumberField({
        key: 'id',
        value: person.id,
        required: false,
        order: 8
      }),

      new TextField({
        key: 'firstName',
        label: 'First Name',
        value: person.firstName,
        required: true,
        order: 1
      }),

      new TextField({
        key: 'lastName',
        label: 'Last Name',
        value: person.lastName,
        required: true,
        order: 2
      }),

      new TextField({
        key: 'title',
        label: 'Title',
        value: person.title,
        required: true,
        order: 3
      }),

      new TextField({
        key: 'location',
        label: 'Location',
        value: person.location,
        required: true,
        order: 4
      }),

      new FileField({
        key: 'imgUrl',
        label: 'Profile pic',
        value: person.imgUrl,
        order: 5
      }),

      new TextareaField({
        key: 'about',
        label: 'About',
        value: person.about,
        required: true,
        order: 6
      })
    ];

    return of(fields.sort((a, b) => a.order - b.order));
  }

}
