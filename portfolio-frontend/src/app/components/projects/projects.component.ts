import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects:any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.projects = [
      {
        title: 'Some shitty horse program',
        date: '2020',
        technologies: 'Python - PyQT - SQLite',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus beatae nulla reiciendis sunt et rem nobis, magnam quam vitae obcaecati tenetur recusandae esse. Incidunt magni minus quis. Aperiam, quod alias.'
      },
      {
        title: 'Some shitty marketplace',
        date: '2021',
        technologies: 'PHP - HTML - CSS - JS - MySQL',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus beatae nulla reiciendis sunt et rem nobis, magnam quam vitae obcaecati tenetur recusandae esse. Incidunt magni minus quis. Aperiam, quod alias.'
      },
      {
        title: 'Some shitty page for a store idk',
        date: '2020',
        technologies: 'HTML - CSS - JS',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus beatae nulla reiciendis sunt et rem nobis, magnam quam vitae obcaecati tenetur recusandae esse. Incidunt magni minus quis. Aperiam, quod alias.'
      }
    ];
  }

}
