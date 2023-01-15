import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { UserApi } from '../../../../infrastructures/api/user.api';
import { UsersStore } from './users.store';

@Injectable()
export class UsersUsecase {
  private readonly store = inject(UsersStore);
  private readonly userApi = inject(UserApi);

  async init(): Promise<void> {
    const users = await firstValueFrom(this.userApi.getUsers());
    this.store.setUsers(users);
  }
}
