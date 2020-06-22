import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
    { 
        path: '', 
        component: HomeComponent, 
        pathMatch: 'full'
    },
    { 
        path: 'bookings', 
        loadChildren: () => import('./bookings/bookings.module')
            .then(m => m.BookingsModule)
    }
];
