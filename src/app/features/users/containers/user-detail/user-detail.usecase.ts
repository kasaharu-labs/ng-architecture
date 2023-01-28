import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { UserApi } from '../../../../infrastructures/api/user.api';
import { UserDetailStore } from './user-detail.store';

@Injectable()
export class UserDetailUsecase {
  private readonly userApi = inject(UserApi);
  private readonly store = inject(UserDetailStore);

  async init(userId: number): Promise<void> {
    const user = await firstValueFrom(this.userApi.getUser(userId));
    this.store.setUser(user);
  }
}
