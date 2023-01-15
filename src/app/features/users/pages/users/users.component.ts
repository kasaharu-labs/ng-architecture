import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from '../../containers/users/users.component';
import { PageTitleComponent } from '../../../../shared/page-title/page-title.component';

@Component({
  standalone: true,
  imports: [CommonModule, PageTitleComponent, UsersComponent],
  templateUrl: './users.component.html',
})
export default class UsersPageComponent {}
