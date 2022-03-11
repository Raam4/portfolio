import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { TokenService } from '../../services/token.service';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class MenubarComponent implements OnInit {

  items:MenuItem[]=[];
  isLogged = false;
  isAdmin = false;

  constructor(private tokenService: TokenService, private router: Router){}

  ngOnInit(): void {

    this.isLogged = this.tokenService.isLogged();
    this.isAdmin = this.tokenService.isAdmin();

    this.items=[
      {
        label: 'About',
        routerLink: '/portfolio/about'
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

  logOut(): void{
    this.tokenService.logOut();
    this.isLogged = this.tokenService.isLogged();
  }
}