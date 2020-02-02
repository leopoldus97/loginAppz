import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../shared/services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  email = '';
  pw = '';
  constructor(public auth: AuthenticationService) { }

  ngOnInit() {
  }
  login() {
    this.auth.login(this.email, this.pw);
  }
}
