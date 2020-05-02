import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/service/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  public ngOnInit() {
  }

  public onLogOut() {
    this.authService.logout();
  }

}
