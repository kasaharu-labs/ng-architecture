import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { User } from '../../../../domain/user';

interface State {
  users: User[] | null;
}

const initialState: State = {
  users: null,
};

@Injectable()
export class UsersStore extends ComponentStore<State> {
  constructor() {
    super(initialState);
  }

  readonly users$ = this.select((state) => state.users);

  readonly setUsers = this.updater((state, users: User[]) => ({ ...state, users }));
}
