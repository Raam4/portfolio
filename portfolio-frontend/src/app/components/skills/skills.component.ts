import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SkillsComponent implements OnInit {
  sskills:any[]=[];
  technology:any[]=[];
  constructor() { }

  ngOnInit(): void {
    this.sskills = [
      {
        label: 'Time Management',
        icon: 'pi pi-clock'
      },
      {
        label: 'Growth Mindset',
        icon: 'pi pi-angle-double-up'
      },
      {
        label: 'Critical Thinking',
        icon: 'pi pi-comments'
      },
      {
        label: 'Problem-solving',
        icon: 'pi pi-cog'
      },
      {
        label: 'Open-mindedness',
        icon: 'pi pi-comment'
      },
      {
        label: 'Teamwork',
        icon: 'pi pi-users'
      }
    ];
    this.technology = [
      {
        src: 'assets/images/logos/html-5.svg',
        tooltip: 'HTML 5',
        cla: 'frontend'
      },
      {
        src: 'assets/images/logos/css-3.svg',
        tooltip: 'CSS 3',
        cla: 'frontend'
      },
      {
        src: 'assets/images/logos/javascript.svg',
        tooltip: 'JavaScript',
        cla: 'frontend'
      },
      {
        src: 'assets/images/logos/typescript-icon.svg',
        tooltip: 'TypeScript',
        cla: 'frontend'
      },
      {
        src: 'assets/images/logos/angular-icon.svg',
        tooltip: 'Angular',
        cla: 'frontend'
      },
      {
        src: 'assets/images/logos/bootstrap.svg',
        tooltip: 'Bootstrap',
        cla: 'frontend'
      },
      {
        src: 'assets/images/logos/primeng.png',
        tooltip: 'PrimeNG',
        cla: 'frontend'
      },
      {
        src: 'assets/images/logos/php.svg',
        tooltip: 'PHP',
        cla: 'backend'
      },
      {
        src: 'assets/images/logos/java.svg',
        tooltip: 'Java',
        cla: 'backend'
      },
      {
        src: 'assets/images/logos/python.svg',
        tooltip: 'Python',
        cla: 'backend'
      },
      {
        src: 'assets/images/logos/spring-icon.svg',
        tooltip: 'Spring Framework',
        cla: 'backend'
      },
      {
        src: 'assets/images/logos/mysql-icon.svg',
        tooltip: 'MySQL',
        cla: 'backend'
      },
      {
        src: 'assets/images/logos/sqlite.svg',
        tooltip: 'SQLite',
        cla: 'backend'
      },
      {
        src: 'assets/images/logos/visual-studio-code.svg',
        tooltip: 'Visual Studio Code',
        cla: 'tools'
      },
      {
        src: 'assets/images/logos/netbeans.svg',
        tooltip: 'NetBeans',
        cla: 'tools'
      },
      {
        src: 'assets/images/logos/git.svg',
        tooltip: 'Git',
        cla: 'tools'
      },
      {
        src: 'assets/images/logos/github-icon.svg',
        tooltip: 'GitHub',
        cla: 'tools'
      },
      {
        src: 'assets/images/logos/xampp.svg',
        tooltip: 'XAMPP',
        cla: 'tools'
      },
      {
        src: 'assets/images/logos/postman-icon.svg',
        tooltip: 'Postman',
        cla: 'tools'
      },
      {
        src: 'assets/images/logos/figma.svg',
        tooltip: 'Figma',
        cla: 'tools'
      },
    ];
  }

}
