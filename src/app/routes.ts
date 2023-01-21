import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  // NOTE: loadComponent を使うと feature の routes.ts も不要になる
  // { path: 'users', loadComponent: () => import('./features/users/pages/users/users.component') },
  // { path: 'users/new', loadComponent: () => import('./features/users/pages/new-user/new-user.component') },
  { path: 'users', loadChildren: () => import('./features/users/routes').then((m) => m.routes) },
];
