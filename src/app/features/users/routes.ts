import { Route } from '@angular/router';
import UsersComponent from './pages/users/users.component';

export const routes: Route[] = [{ path: '', pathMatch: 'full', component: UsersComponent }];
