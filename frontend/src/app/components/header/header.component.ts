import { Component, OnInit } from '@angular/core';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquare, faTerminal} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faFace = faFacebook;
  faLink = faLinkedin;
  faGit = faGithub;
  faSquare = faSquare;
  faTerminal = faTerminal;

  constructor() { }

  ngOnInit(): void {
  }

}
