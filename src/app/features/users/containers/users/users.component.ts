import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { User } from '../../../../domain/user';
import { UserApi } from '../../../../infrastructures/api/user.api';
import { LyUsersComponent } from '../../views/ly-users/ly-users.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, LyUsersComponent],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  private readonly userApi = inject(UserApi);
  readonly $users = signal<User[]>([]);

  async ngOnInit(): Promise<void> {
    const users = await firstValueFrom(this.userApi.getUsers());
    this.$users.set(users);
  }
}
