import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  events:any = [];
  constructor() { }

  ngOnInit(): void {
    this.events = [
      {
        level: 'University',
        year: '2019 - Present',
        location: 'Neuquén',
        establishment: 'National University of Comahue',
        title: 'Some web development shit'
      },
      {
        level: 'Highschool',
        year: 'Finalized at 2016',
        location: 'Neuquén',
        establishment: 'Centro Provincial de Enseñanza Media N°29',
        title: 'Some economics shit'
      }
    ]
  }
}
