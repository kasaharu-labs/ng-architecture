import { Injectable } from '@angular/core';
import { config } from '../../config';

@Injectable({
  providedIn: 'root',
})
export class AppConfig {
  readonly apiUrl = config.apiUrl;
}
