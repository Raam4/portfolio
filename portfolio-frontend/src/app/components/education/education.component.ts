import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Education } from 'src/app/models/education';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EducationComponent implements OnInit {

  titles:Education[] = [];

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.loadEducation();
  }

  loadEducation(): void{
    this.apiService.listEducation().subscribe(
      data => {
        this.titles = data;
      },
      err => {
        console.log(err);
      }
    );
  }


    /*
    this.titles = [
      {
        level: 'University',
        year: '2019 - Present',
        location: 'Neuquén',
        establishment: 'National University of Comahue',
        title: 'University degree in web development',
        description: 'I\'m in the last year of this career. So far I have learned about frontend web programming with HTML, CSS and \
         JavaScript, and backend with PHP and MySQL. I also learned about graphic design, and IT security related to the web. \
         In this last year I will learn about analysis, design and documentation of systems, and about frameworks and interoperability.'
      },
      {
        level: 'Professional education',
        year: 'Started and finalized at 2019',
        location: 'Neuquén',
        establishment: 'Professional training center N°12',
        title: 'Installer and support of informatic networks',
        description: 'Here I learned about computer networks, the infrastructure needed to install them and how\
         to configure them for any environment.'
      },
      {
        level: 'Professional education',
        year: 'Started and finalized at 2017',
        location: 'Neuquén',
        establishment: 'Professional training center N°12',
        title: 'Installer and support of informatic systems',
        description: 'With this course I know how to learn to install various computer systems, especially computers of any brand,\
         architecture or operating system. I\'ve also learned how to repair and optimize them.'
      },
      {
        level: 'University',
        year: '2016 - 2018',
        location: 'Neuquén',
        establishment: 'National University of Comahue',
        title: 'Bachelor of computer science',
        description: 'It\'s important to mention that I studied this career for two years, since I learned the basics about programming,\
         databases and computing in general. It was what prompted me to follow this path of knowledge to aspire to be a developer.\
         I\'ve suspended it because I started working to become independent, but I want to continue it one day.'
      },
      {
        level: 'Highschool',
        year: 'Finalized at 2015',
        location: 'Neuquén',
        establishment: 'Provincial Middle School N°29',
        title: 'Commercial expert technical assistant in accounting economic sciences',
        description: 'I acquired knowledge about economics sciences, accounting and economics maths.\
         Some of this knowledge helped me open my own business, keeping its accounting and taxes up to date.'
      }
    ];
    */
}
