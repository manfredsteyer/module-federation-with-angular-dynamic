import { Routes } from '@angular/router';
import { BookingsSearchComponent } from './bookings-search/bookings-search.component';

export const FLIGHTS_ROUTES: Routes = [
    {
      path: '',
      redirectTo: 'bookings-search',
      pathMatch: 'full'
    },
    {
      path: 'bookings-search',
      component: BookingsSearchComponent
    }
];
