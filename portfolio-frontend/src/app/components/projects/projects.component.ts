import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent implements OnInit {
  projects:any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.projects = [
      {
        title: 'TOC TOC Drinks Delivery',
        img: 'assets/images/toctoc.jpg',
        date: '2021',
        technologies: 'HTML - CSS - JS - PHP - MySQL',
        description: 'Web application based on a real domain, from a store located in the city of Neuquén.\
         It was created together with a classmate, as an integrative project for a second year subject of the career that I\'m studying,\
         following an MVC pattern with the mentioned technologies without a framework. We tried our best using various tools\
         from the languages we learned; from ORM libraries for PHP to jQuery and AJAX for JavaScript. Our objective, beyond\
         passing the subject, was to free our creativity to create functionalities with pure code, in a pleasant interface.',
        link: 'https://github.com/Raam4/PWD_TPFinal'
      },
      {
        title: 'Website Betel Tu Estilo',
        img: 'assets/images/betelweb.jpg',
        date: '2021',
        technologies: 'HTML - CSS - JS',
        description: 'This project was also done for a subject, on my first year. It\'s a static web page in which we had to create\
         it based on a theme of our choice; in my case it was the store that I own. It was the first web project that I\
         carried out on my own from scratch.',
        link: 'https://raam4.github.io/BetelWeb/index.html'
      },
      {
        title: 'Remates JCN',
        img: 'assets/images/jcnsw.jpeg',
        date: '2021',
        technologies: 'Python - PyQT - SQLite',
        description: 'This project isn\'t web, but desktop, and it\'s important for me since I started it on my own, without previous\
         knowledge about the language or the tools that I used. The real goal behind this was to test my ability to learn and adapt under a\
         certain "pressure". The software was designed to be used specifically in a horse club/racetrack in the city of Neuquén, it\'s\
         currently used to load bets at the moment, and generate customer tickets and reports for cash management.\
         It was created with little time (less than two months to learn the needs, then learn the tools and build the software), and only\
         to be used for a short time, while I develop a more complex system (more possibly web app) so that, in addition to\
         fulfilling the functionalities of the current one, it can also be used for administrative tasks of the club.',
        link: 'https://github.com/Raam4/jcn'
      }
    ];
  }

}
