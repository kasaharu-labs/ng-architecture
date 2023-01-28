import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from '../../containers/user-detail/user-detail.component';

@Component({
  standalone: true,
  imports: [CommonModule, UserDetailComponent],
  templateUrl: './user-detail.component.html',
})
export default class UserDetailPageComponent {}
