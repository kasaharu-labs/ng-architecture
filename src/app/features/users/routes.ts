import { Route } from '@angular/router';
import UsersPageComponent from './pages/users/users.component';

export const routes: Route[] = [{ path: '', pathMatch: 'full', component: UsersPageComponent }];
