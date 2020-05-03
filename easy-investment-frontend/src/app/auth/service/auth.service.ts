import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {UserModel} from '../../shared/model/user/user.model';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {BASE_HTTP_URL} from '../../shared/data/general-data';
import {catchError, map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // tslint:disable-next-line:variable-name
  private _accessToken: string;

  get accessToken(): string {
    return this._accessToken;
  }

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  public login(username: string, password: string): Observable<any> {
    const body = {username, password};
    const url = `${BASE_HTTP_URL}auth/login`;
    return this.httpClient.post(url, body)
      .pipe(
        map((response: any) => {
          if (response.access_token) {
            this._accessToken = response.access_token;
            return true;
          }
          return false;
        }),
        catchError((response: HttpErrorResponse) => {
          if (response.status === 401) {
            return of(false);
          } else {
            throw response.error;
          }
        })
      );
  }

  public logout() {
    this._accessToken = null;
    this.router.navigate(['/login']);
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
