import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

interface State {
  userId: number | null;
}

const initialState: State = {
  userId: null,
};

@Injectable()
export class UserDetailPageStore extends ComponentStore<State> {
  constructor() {
    super(initialState);
  }

  readonly userId$ = this.select((state) => state.userId);

  readonly setUserId = this.updater((state, userId: number) => ({ ...state, userId }));
}
