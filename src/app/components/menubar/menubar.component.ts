import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { TokenService } from '../../services/token.service';
import { MenuItem } from 'primeng/api';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class MenubarComponent implements OnInit {

  $person: Observable<Person>;
  items: MenuItem[];
  isAdmin = false;

  constructor(
    private tokenService: TokenService,
    private apiService: ApiService
    ){}

  ngOnInit(): void {

    this.$person = this.apiService.getData();

    this.isAdmin = this.tokenService.isAdmin();

    this.items=[
      {
        label: 'Home',
        routerLink: '/portfolio/home'
      },
      {
        label: 'Experience',
        routerLink: '/portfolio/experience'
      },
      {
        label: 'Education',
        routerLink: '/portfolio/education'
      },
      {
        label: 'Projects',
        routerLink: '/portfolio/projects'
      },
      {
        label: 'Skills',
        routerLink: '/portfolio/skills'
      }
    ];
  }

  isLogged(){
    return this.tokenService.isLogged();
  }

  logOut(): void{
    this.tokenService.logOut();
    this.isLogged();
  }
}