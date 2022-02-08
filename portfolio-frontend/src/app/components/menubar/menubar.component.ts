import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class MenubarComponent implements OnInit {

  items:MenuItem[]=[];

  ngOnInit(): void {

    this.items=[
      {
        label: 'About',
        routerLink: '/about'
      },
      {
        label: 'Experience',
        routerLink: '/experience'
      },
      {
        label: 'Education',
        routerLink: '/education'
      },
      {
        label: 'Projects',
        routerLink: '/projects'
      },
      {
        label: 'Skills',
        routerLink: '/skills'
      },
      {
        label: 'Technologies',
        routerLink: '/technologies'
      }
    ];
  }
}