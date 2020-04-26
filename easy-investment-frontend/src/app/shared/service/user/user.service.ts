import {Injectable} from '@angular/core';
import {UserModel} from '../../model/user/user.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: UserModel[];

  constructor() {
    this.users = [
      new UserModel(1, 'Administrator')
    ];
  }

  public getAllUsers(): Observable<UserModel[]> {
    return of(this.users);
  }
}
// export class UserService {
//
//   constructor(private httpClient: HttpClient) {
//   }
//
//   public getAllUsers(): Observable<UserModel[]> {
//     return this.httpClient.get<UserModel[]>('localhost:3000/users');
//   }
//
//   public getUserById(id: number): Observable<UserModel> {
//     return this.httpClient.get<UserModel>(`localhost:3000/users/${id}`);
//   }
// }
