import { Component, OnInit } from '@angular/core';
import {faPen} from '@fortawesome/free-solid-svg-icons'
import {PersonalService} from '../../servicios/personal.service'

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  faPen = faPen;
  portfolioData:any;
  constructor(private dataPersonal:PersonalService) { }

  ngOnInit(): void {
    this.dataPersonal.obtenerDatos().subscribe(data =>{
      console.log(JSON.stringify(data));
      this.portfolioData = data[0];
    })
  }

}
