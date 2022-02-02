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
        label: 'About'
      },
      {
        label: 'Experience'
      },
      {
        label: 'Education'
      },
      {
        label: 'Skills'
      },
      {
        label: 'Technologies'
      }
    ];
  }
}