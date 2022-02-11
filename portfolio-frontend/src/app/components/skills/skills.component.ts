import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SkillsComponent implements OnInit {
  sskills:any[]=[];
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
  }

}
