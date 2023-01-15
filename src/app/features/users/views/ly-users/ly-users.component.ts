import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../../../domain/user';

@Component({
  selector: 'app-ly-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ly-users.component.html',
  styleUrls: ['./ly-users.component.scss'],
})
export class LyUsersComponent {
  @Input() users: User[] | null = null;
}
