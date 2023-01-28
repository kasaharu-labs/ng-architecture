import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Photo } from '../../../../domain/photo';

interface State {
  photos: Photo[] | null;
}

const initialState: State = {
  photos: null,
};

@Injectable()
export class UserPhotosStore extends ComponentStore<State> {
  constructor() {
    super(initialState);
  }

  readonly photos$ = this.select((state) => state.photos);

  readonly setPhotos = this.updater((state, photos: Photo[]) => ({ ...state, photos }));
}
