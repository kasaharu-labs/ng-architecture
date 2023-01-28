import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../../domain/album';
import { AppConfig } from '../../providers/app-config';

@Injectable({
  providedIn: 'root',
})
export class AlbumApi {
  private readonly appConfig = inject(AppConfig);
  private readonly http = inject(HttpClient);

  getAlbums(userId: number): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.appConfig.apiUrl}/albums?userId=${userId}`);
  }
}
