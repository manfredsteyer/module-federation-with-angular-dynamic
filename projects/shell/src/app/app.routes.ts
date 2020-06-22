import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '../federation-utils';

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },
    {
      path: 'flights',
      // loadChildren: () => import('mfe1/Module').then(m => m.FlightsModule)
      loadChildren: () => loadRemoteModule({
          remoteEntry: 'http://localhost:3000/remoteEntry.js',
          remoteName: 'mfe1',
          exposedModule: 'Module'
        })
        .then(m => m.FlightsModule)
    },
];
