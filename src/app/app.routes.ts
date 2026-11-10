import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'redenciones',
    loadChildren: () => import('./features/redenciones/redenciones.routes'),
  },
];
