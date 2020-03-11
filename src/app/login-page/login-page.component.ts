import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../shared/services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  email = '';
  pw = '';
  constructor(public auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
    if (this.auth.loggedIn === true) {
      this.router.navigateByUrl('account');
    }
  }
  login() {
    this.auth.login(this.email, this.pw);
  }
}
