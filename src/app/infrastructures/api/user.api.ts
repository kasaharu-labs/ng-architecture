import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateUser, User } from '../../domain/user';
import { AppConfig } from '../../providers/app-config';

@Injectable({
  providedIn: 'root',
})
export class UserApi {
  private readonly appConfig = inject(AppConfig);
  private readonly http = inject(HttpClient);

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.appConfig.apiUrl}/users`);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.appConfig.apiUrl}/users/${id}`);
  }

  createUser(user: CreateUser): Observable<User> {
    return this.http.post<User>(`${this.appConfig.apiUrl}/users`, user);
  }
}
