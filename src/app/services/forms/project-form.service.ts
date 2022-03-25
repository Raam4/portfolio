import { Injectable } from '@angular/core';
import { BaseField } from 'src/app/models/forms/base-field';
import { TextField } from 'src/app/models/forms/text-field';
import { TextareaField } from 'src/app/models/forms/textarea-field';
import { Observable, of } from 'rxjs';
import { Project } from 'src/app/models/project';
import { NumberField } from 'src/app/models/forms/number-field';
import { ObjectField } from 'src/app/models/forms/object-field';
import { FileField } from 'src/app/models/forms/file-field';

@Injectable({
  providedIn: 'root'
})
export class ProjectFormService {

  constructor() { }
  
  public getProjectForm(project:Project | null): Observable<BaseField<any>[]>{

    const fields: BaseField<string | number | {} | null>[] = [

      new TextField({
        key: 'name',
        label: 'Name',
        required: true,
        order: 1
      }),

      new TextField({
        key: 'techs',
        label: 'Techs',
        required: true,
        order: 2
      }),

      new FileField({
        key: 'imgUrl',
        label: 'Image',
        required: true,
        order: 3
      }),

      new NumberField({
        key: 'dateYear',
        label: 'Year of finalization',
        required: true,
        order: 4
      }),

      new TextField({
        key: 'link',
        label: 'Link',
        required: true,
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
        value: 'project',
        required: false,
        order: 7
      }),

      new NumberField({
        key: 'id',
        required: false,
        order: 8
      })

    ];

    if(project != null){
      fields.forEach(element => {
        switch(element.key){
          case 'id':{ element.value = project.id; break; }
          case 'name':{ element.value = project.name; break; }
          case 'imgUrl':{ element.value = project.imgUrl; break; }
          case 'techs':{ element.value = project.techs; break; }
          case 'dateYear':{ element.value = project.dateYear; break; }
          case 'link':{ element.value = project.link; break; }
          case 'description':{ element.value = project.description; break; }
        }
      });
    }else{
      fields.pop();
      fields.push(
        new ObjectField({
          key: 'person',
          value: {'id':'1'},
          required: false,
          order: 9
        })
      );
    }
    
    return of(fields.sort((a, b) => a.order - b.order));
  }

}