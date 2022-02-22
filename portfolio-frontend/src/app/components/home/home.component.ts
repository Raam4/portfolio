import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  persons: Person[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadPerson();
  }

  loadPerson(): void{
    this.apiService.listPerson().subscribe(
      data => {
        this.persons = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}