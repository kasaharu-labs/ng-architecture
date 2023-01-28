import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AlbumApi } from '../../../../infrastructures/api/album.api';
import { PhotoApi } from '../../../../infrastructures/api/photo.api';
import { UserPhotosStore } from './user-photos.store';

@Injectable()
export class UserPhotosUsecase {
  private readonly albumApi = inject(AlbumApi);
  private readonly photoApi = inject(PhotoApi);
  private readonly store = inject(UserPhotosStore);

  async init(userId: number): Promise<void> {
    const albums = await firstValueFrom(this.albumApi.getAlbums(userId));
    const albumIds = albums.map((album) => album.id);

    const photosList = await Promise.all(albumIds.map((albumId) => firstValueFrom(this.photoApi.getPhotos(albumId))));
    const photos = photosList.flat();
    this.store.setPhotos(photos);
  }
}
