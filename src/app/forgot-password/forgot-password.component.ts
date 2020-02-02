import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../shared/services/authentication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  email = '';
  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }

  resetPassword() {
    this.auth.resetPassword(this.email);
  }
}
