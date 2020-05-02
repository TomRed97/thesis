import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../auth/service/auth.service';
import {UserModel} from '../../../shared/model/user/user.model';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  public user: UserModel;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
  }

}
