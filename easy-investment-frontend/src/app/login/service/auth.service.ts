import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {UserModel} from '../../shared/model/user/user.model';

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

  public getCurrentUser(): UserModel {
    return new UserModel(1,
      'admin',
      'Administrator',
      'admin',
      't@g.com',
      'NUACA',
      new Date());
  }
}
