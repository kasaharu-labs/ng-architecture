import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { User } from '../../../../domain/user';

interface State {
  user: User | null;
}

const initialState: State = {
  user: null,
};

@Injectable()
export class UserDetailStore extends ComponentStore<State> {
  constructor() {
    super(initialState);
  }

  readonly user$ = this.select((state) => state.user);

  readonly setUser = this.updater((state, user: User) => ({ ...state, user }));
}
