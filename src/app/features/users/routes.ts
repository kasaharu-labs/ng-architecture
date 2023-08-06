import { Route } from '@angular/router';
import NewUserPageComponent from './pages/new-user/new-user.component';
import UserDetailPageComponent from './pages/user-detail/user-detail.component';
import UsersPageComponent from './pages/users/users.component';

const USER_ROUTES: Route[] = [
  { path: '', pathMatch: 'full', component: UsersPageComponent },
  { path: 'new', component: NewUserPageComponent },
  { path: ':id', component: UserDetailPageComponent },
];

export default USER_ROUTES;
