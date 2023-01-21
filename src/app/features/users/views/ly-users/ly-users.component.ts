import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { User } from '../../../../domain/user';

@Component({
  selector: 'app-ly-users',
  standalone: true,
  imports: [CommonModule, RouterLink, MatTableModule],
  templateUrl: './ly-users.component.html',
  styleUrls: ['./ly-users.component.scss'],
})
export class LyUsersComponent {
  @Input() users: User[] | null = null;
  displayedColumns: string[] = ['name', 'username', 'email'];

  click(user: User): void {
    console.log('click ----- ');
    console.log(user);
  }
}
