import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../../domain/photo';
import { AppConfig } from '../../providers/app-config';

@Injectable({
  providedIn: 'root',
})
export class PhotoApi {
  private readonly appConfig = inject(AppConfig);
  private readonly http = inject(HttpClient);

  getPhotos(albumId: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.appConfig.apiUrl}/photos?albumId=${albumId}`);
  }
}
