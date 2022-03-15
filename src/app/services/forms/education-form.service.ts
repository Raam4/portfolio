import { Injectable } from '@angular/core';
import { BaseField } from 'src/app/models/forms/base-field';
import { TextField } from 'src/app/models/forms/text-field';
import { TextareaField } from 'src/app/models/forms/textarea-field';
import { Observable, of } from 'rxjs';
import { Education } from 'src/app/models/education';
import { NumberField } from 'src/app/models/forms/number-field';
import { DateField } from 'src/app/models/forms/date-field';
import { ObjectField } from 'src/app/models/forms/object-field';

@Injectable({
  providedIn: 'root'
})
export class EducationFormService {

  constructor() { }
  
  public getEducationForm(education: Education | null): Observable<BaseField<any>[]>{

    const fields: BaseField<string | Date | number | {} | null>[] = [

      new TextField({
        key: 'title',
        label: 'Title',
        required: true,
        order: 1
      }),

      new TextField({
        key: 'institution',
        label: 'Institution',
        required: true,
        order: 2
      }),

      new TextField({
        key: 'degree',
        label: 'Degree',
        required: true,
        order: 3
      }),

      new TextField({
        key: 'location',
        label: 'Location',
        required: true,
        order: 4
      }),

      new DateField({
        key: 'dateStart',
        label: 'Start Date',
        required: true,
        order: 5
      }),

      new DateField({
        key: 'dateEnd',
        label: 'End Date',
        order: 6
      }),

      new TextareaField({
        key: 'description',
        label: 'Description',
        required: true,
        order: 7
      }),

      new TextField({
        key: 'table',
        value: 'education',
        required: false,
        order: 8
      }),

      new NumberField({
        key: 'id',
        required: false,
        order: 9
      })

    ];

    if(education != null){
      fields.forEach(element => {
        switch(element.key){
          case 'id':{ element.value = education.id; break; }
          case 'title':{ element.value = education.title; break; }
          case 'institution':{ element.value = education.institution; break; }
          case 'degree':{ element.value = education.degree; break; }
          case 'location':{ element.value = education.location; break; }
          case 'dateStart':{ element.value = education.dateStart; break; }
          case 'dateEnd':{ element.value = education.dateEnd; break; }
          case 'description':{ element.value = education.description; break; }
        }
      });
    }else{
      fields.pop();
      fields.push(
        new ObjectField({
          key: 'person',
          value: {'id':'1'},
          required: false,
          order: 10
        })
      );
    }
    
    return of(fields.sort((a, b) => a.order - b.order));
  }

}