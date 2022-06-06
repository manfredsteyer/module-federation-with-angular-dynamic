import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { buildRoutes } from '../menu-utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit  {

  constructor(
    private router: Router) {
  }

  async ngOnInit(): Promise<void> {
    // const routes = buildRoutes(this.microfrontends);
    // this.router.resetConfig(routes);
  }
}

