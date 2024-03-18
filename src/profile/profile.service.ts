import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, share, shareReplay } from 'rxjs';
import { Profile } from './profile.model';

// decide the module that this service is part of
// error handling scenarios

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  // TODO: move into config for hardcoded values
  API_URL: string = 'https://jsonplaceholder.typicode.com/todos/1';

  constructor(private httpClient: HttpClient) {}

  getProfile(): Observable<Profile> {
    return this.httpClient.get<Profile>(this.API_URL);
  }
}
