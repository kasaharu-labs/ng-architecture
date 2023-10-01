import { inject, Injectable, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Photo } from '../../../../domain/photo';
import { AlbumApi } from '../../../../infrastructures/api/album.api';
import { PhotoApi } from '../../../../infrastructures/api/photo.api';

export interface UserPhotosVm {
  photos: Photo[] | null;
  displayCount: number;
}

const initialState: UserPhotosVm = {
  photos: null,
  displayCount: 20,
};

@Injectable()
export class UserPhotosUsecase {
  private readonly albumApi = inject(AlbumApi);
  private readonly photoApi = inject(PhotoApi);

  readonly $state = signal<UserPhotosVm>(initialState);

  async init(userId: number): Promise<void> {
    const albums = await firstValueFrom(this.albumApi.getAlbums(userId));
    const albumIds = albums.map((album) => album.id);

    const photosList = await Promise.all(albumIds.map((albumId) => firstValueFrom(this.photoApi.getPhotos(albumId))));
    const photos = photosList.flat();
    this.$state.set({ ...this.$state(), photos });
  }
}
