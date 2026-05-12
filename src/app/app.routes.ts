import { Routes } from '@angular/router';
import { autoLoginPartialRoutesGuard } from 'angular-auth-oidc-client';
import { PublicLayout } from './layouts/public-layout/public-layout';
import { AppShell } from './layouts/app-shell/app-shell';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayout,
    children: [
      {
        path: '',
        loadComponent: () => import('./features/landing/landing').then((m) => m.Landing),
        title: 'Sonke Sports — United by the game',
      },
    ],
  },
  {
    path: 'dashboard',
    component: AppShell,
    canActivate: [autoLoginPartialRoutesGuard],
    loadChildren: () => import('./features/dashboard/dashboard.routes').then((m) => m.dashboardRoutes),
  },
];
