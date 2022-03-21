import { Injectable } from '@angular/core';
import { BaseField } from 'src/app/models/forms/base-field';
import { TextField } from 'src/app/models/forms/text-field';
import { TextareaField } from 'src/app/models/forms/textarea-field';
import { Observable, of } from 'rxjs';
import { Experience } from 'src/app/models/experience';
import { NumberField } from 'src/app/models/forms/number-field';
import { DateField } from 'src/app/models/forms/date-field';
import { ObjectField } from 'src/app/models/forms/object-field';

@Injectable({
  providedIn: 'root'
})
export class ExperienceFormService {

  constructor() { }
  
  public getExperienceForm(experience: Experience | null): Observable<BaseField<any>[]>{

    const fields: BaseField<string | Date | number | {} | null>[] = [

      new TextField({
        key: 'position',
        label: 'Position',
        required: true,
        order: 1
      }),

      new TextField({
        key: 'company',
        label: 'Company',
        required: true,
        order: 2
      }),

      new TextField({
        key: 'location',
        label: 'Location',
        required: true,
        order: 3
      }),

      new DateField({
        key: 'dateStart',
        label: 'Start Date',
        required: true,
        order: 4
      }),

      new DateField({
        key: 'dateEnd',
        label: 'End Date',
        order: 5
      }),

      new TextareaField({
        key: 'description',
        label: 'Description',
        required: true,
        order: 6
      }),

      new TextField({
        key: 'table',
        value: 'experience',
        required: false,
        order: 7
      }),

      new NumberField({
        key: 'id',
        required: false,
        order: 8
      })

    ];

    if(experience != null){
      fields.forEach(element => {
        switch(element.key){
          case 'id':{ element.value = experience.id; break; }
          case 'position':{ element.value = experience.position; break; }
          case 'company':{ element.value = experience.company; break; }
          case 'location':{ element.value = experience.location; break; }
          case 'dateStart':{ element.value = experience.dateStart; break; }
          case 'dateEnd':{ element.value = experience.dateEnd; break; }
          case 'description':{ element.value = experience.description; break; }
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