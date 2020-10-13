import { Component } from '@angular/core';
import { Microfrontend } from './microfrontends/microfrontend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent /* implements OnInit */ {

  microfrontends: Microfrontend[] = [];

  // constructor(
  //   private router: Router,
  //   private lookupService: LookupService) {
  // }

  // async ngOnInit(): Promise<void> {
  //   this.microfrontends = await this.lookupService.lookup();
  //   const routes = buildRoutes(this.microfrontends);
  //   this.router.resetConfig(routes);
  // }
}

