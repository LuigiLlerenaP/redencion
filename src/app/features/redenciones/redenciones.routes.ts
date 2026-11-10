import { Routes } from '@angular/router';
import RedencionLayout from './Layout/redencion-layout/redencion-layout';

const rutasRedenciones: Routes = [
  {
    path: '',
    component: RedencionLayout,
    children: [
      {
        path: 'consulta',
        loadComponent: () => import('./Pages/consulta-redencion-millas/consulta-redencion-millas'),
      },
      {
        path: 'gestion',
        loadComponent: () => import('./Pages/gestion/gestion'),
      },
    ],
  },
];

export default rutasRedenciones;
