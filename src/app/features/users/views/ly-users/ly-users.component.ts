import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../../../domain/user';

@Component({
    selector: 'app-ly-users',
    imports: [CommonModule, RouterLink, MatTableModule, MatRippleModule],
    templateUrl: './ly-users.component.html',
    styleUrls: ['./ly-users.component.scss']
})
export class LyUsersComponent {
  private readonly router = inject(Router);

  @Input() users: User[] | null = null;
  displayedColumns: string[] = ['name', 'username', 'email'];

  click(user: User): void {
    this.router.navigateByUrl(`/users/${user.id}`);
  }
}
