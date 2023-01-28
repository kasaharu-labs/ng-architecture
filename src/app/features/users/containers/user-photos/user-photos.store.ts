import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Photo } from '../../../../domain/photo';

interface State {
  photos: Photo[] | null;
  displayCount: number;
}

const initialState: State = {
  photos: null,
  displayCount: 20,
};

@Injectable()
export class UserPhotosStore extends ComponentStore<State> {
  constructor() {
    super(initialState);
  }

  readonly photos$ = this.select((state) => (state.photos ? state.photos.slice(0, state.displayCount) : state.photos));

  readonly setPhotos = this.updater((state, photos: Photo[]) => ({ ...state, photos }));
}
