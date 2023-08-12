import { inject, Injectable, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { User } from '../../../../domain/user';
import { UserApi } from '../../../../infrastructures/api/user.api';

export interface UsersVm {
  users: User[] | null;
  isLoading: boolean;
}

const initialState: UsersVm = {
  users: null,
  isLoading: false,
};

@Injectable()
export class UsersUsecase {
  private readonly userApi = inject(UserApi);

  readonly $state = signal<UsersVm>(initialState);

  async init(): Promise<void> {
    this.$state.set({ ...this.$state(), isLoading: true });

    const users = await firstValueFrom(this.userApi.getUsers());
    this.$state.set({ ...this.$state(), users, isLoading: false });
  }
}
