import {Component, OnInit} from '@angular/core';
import {AuthService} from './service/auth.service';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public password = '';

  public username = '';

  public pswFormControl = new FormControl('', [Validators.required]);
  public userFormControl = new FormControl('', [Validators.required]);

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  public login(): void {
    this.authService.login(this.username, this.password)
      .subscribe(data => {
        if (data) {
          this.router.navigateByUrl('/main');
        } else {
          this.pswFormControl.setErrors({invalid: true});
          this.userFormControl.setErrors({invalid: true});
        }
      });
  }

}
