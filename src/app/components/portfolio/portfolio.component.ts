import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-portfolio',
  template: `
              <app-menubar></app-menubar>
              <p-scrollTop></p-scrollTop>
              <router-outlet></router-outlet>
            `
})
export class PortfolioComponent implements OnInit {

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.updateData();
  }

}
