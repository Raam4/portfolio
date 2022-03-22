import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { TokenService } from '../../services/token.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class MenubarComponent implements OnInit {

  items: MenuItem[];
  isAdmin = false;

  constructor(private tokenService: TokenService){}

  ngOnInit(): void {

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