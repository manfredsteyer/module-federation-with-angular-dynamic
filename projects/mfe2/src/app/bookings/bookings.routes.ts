import { Routes } from '@angular/router';
import { BookingsSearchComponent } from './bookings-search/bookings-search.component';

export const FLIGHTS_ROUTES: Routes = [
    {
      path: 'flights-search',
      component: BookingsSearchComponent
    }
];
