import { inject, Injectable, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { User } from '../../../../domain/user';
import { UserApi } from '../../../../infrastructures/api/user.api';

export interface UserDetailVm {
  user: User | null;
}

const initialState: UserDetailVm = {
  user: null,
};

@Injectable()
export class UserDetailUsecase {
  private readonly userApi = inject(UserApi);

  readonly $state = signal<UserDetailVm>(initialState);

  async init(userId: number): Promise<void> {
    const user = await firstValueFrom(this.userApi.getUser(userId));
    this.$state.set({ ...this.$state(), user });
  }
}
