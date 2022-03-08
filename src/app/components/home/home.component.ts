import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { ApiService } from 'src/app/services/api.service';
import { DialogService } from 'primeng/dynamicdialog';
import { homeForm } from './homeForm';
import { PersonFormService } from 'src/app/services/forms/person-form.service';
import { Observable } from 'rxjs';
import { BaseField } from 'src/app/models/forms/base-field';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DialogService, PersonFormService]
})
export class HomeComponent implements OnInit {

  fields$: Observable<BaseField<any>[]>;
  
  person: Person;

  constructor(private apiService: ApiService, public dialogService: DialogService, private fServ: PersonFormService) {
  }

  ngOnInit(): void {
    this.loadPerson();
  }

  show() {
    const ref = this.dialogService.open(homeForm, {
        data: {
          fields: this.fields$,
        },
        header: 'Edit personal info',
        width: '40%',
        contentStyle: {"display":"flex", "justify-content":"center"}
    });
  }

  loadPerson(): void{
    this.apiService.listPerson().subscribe(
      data => {
        this.person = data[0];
        this.fields$ = this.fServ.getPersonForm(this.person);
      }
    );
  }

}