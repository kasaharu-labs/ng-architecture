import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from '../../containers/users/users.component';

@Component({
  standalone: true,
  imports: [CommonModule, UsersComponent],
  templateUrl: './users.component.html',
})
export default class UsersPageComponent {}
