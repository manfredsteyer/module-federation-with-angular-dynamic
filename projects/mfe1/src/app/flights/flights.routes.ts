import { Routes } from '@angular/router';
import { FlightsSearchComponent } from './flights-search/flights-search.component';

export const FLIGHTS_ROUTES: Routes = [
    {
      path: '',
      redirectTo: 'flights-search',
      pathMatch: 'full'
    },
    {
      path: 'flights-search',
      component: FlightsSearchComponent
    }
];
