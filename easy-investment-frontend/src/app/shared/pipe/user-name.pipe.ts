import {Pipe, PipeTransform} from '@angular/core';
import {UserService} from '../service/user/user.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Pipe({
  name: 'userName',
  pure: true
})
export class UserNamePipe implements PipeTransform {

  constructor(private userService: UserService) {
  }

  transform(value: number): Observable<string> {
    return this.userService.getAllUsers()
      .pipe(
        map((users) => {
          const foundUser = users.find(user => user.id === value);
          return foundUser ? foundUser.name : '';
        })
      );
  }
}
