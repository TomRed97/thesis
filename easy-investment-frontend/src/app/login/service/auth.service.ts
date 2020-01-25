import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  public login(username: string, password: string): Observable<boolean> {
    if (username === 'admin' && password === '12345') {
      return of(true);
    } else {
      return of(false);
    }
  }
}
