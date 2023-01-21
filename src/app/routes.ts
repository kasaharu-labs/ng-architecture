import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', loadComponent: () => import('./features/users/pages/users/users.component') },
  { path: 'users/new', loadComponent: () => import('./features/users/pages/new-user/new-user.component') },
];
