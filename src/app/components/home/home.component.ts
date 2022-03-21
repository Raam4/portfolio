import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { ApiService } from 'src/app/services/api.service';
import { DialogService } from 'primeng/dynamicdialog';
import { HomeForm } from './home-form.component';
import { HomeFormService } from 'src/app/services/forms/home-form.service';
import { Observable } from 'rxjs';
import { BaseField } from 'src/app/models/forms/base-field';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DialogService, HomeFormService]
})
export class HomeComponent implements OnInit {

  $fields: Observable<BaseField<any>[]>;
  
  $person: Observable<Person>;

  constructor(
    private apiService: ApiService,
    public dialogService: DialogService,
    private fServ: HomeFormService,
    private tokenService: TokenService
    ) {
  }

  ngOnInit(){
    this.loadPerson();
  }

  editInfo(person: Person) {
    this.$fields = this.fServ.getPersonForm(person);
    const ref = this.dialogService.open(HomeForm, {
        data: {
          fields: this.$fields,
        },
        header: 'Edit personal info',
        contentStyle: {
          "display":"flex",
          "justify-content":"center"
        }
    });
  }

  loadPerson(){
    this.$person = this.apiService.detailPerson(1);
  }

  isLogged(){
    return this.tokenService.isLogged();
  }

}