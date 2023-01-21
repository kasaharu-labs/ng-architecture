import { Route } from '@angular/router';
import NewUserPageComponent from './pages/new-user/new-user.component';
import UsersPageComponent from './pages/users/users.component';

export const routes: Route[] = [
  { path: '', pathMatch: 'full', component: UsersPageComponent },
  { path: 'new', component: NewUserPageComponent },
];
