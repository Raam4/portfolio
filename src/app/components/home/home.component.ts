import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { ApiService } from 'src/app/services/api.service';
import { DialogService } from 'primeng/dynamicdialog';
import { HomeFormService } from 'src/app/services/forms/home-form.service';
import { Observable } from 'rxjs';
import { BaseField } from 'src/app/models/forms/base-field';
import { TokenService } from 'src/app/services/token.service';
import { TempFormComponent } from '../dynamic-form/temp-form.component';

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
    this.$person = this.apiService.getData();
  }

  editInfo(person: Person) {
    this.$fields = this.fServ.getPersonForm(person);
    const ref = this.dialogService.open(TempFormComponent, {
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

  isLogged(){
    return this.tokenService.isLogged();
  }

}