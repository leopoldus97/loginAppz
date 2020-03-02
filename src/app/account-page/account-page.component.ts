import { Component, OnInit } from '@angular/core';
import {User} from '../shared/models/user';
import {AuthenticationService} from '../shared/services/authentication.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {
  password: string;
  constructor(public auth: AuthenticationService) {
    this.password = '';
  }

  ngOnInit() {
  }

  update(user: User) {
    this.auth.update(user);
  }

  changePassword() {
      this.auth.changePassword(this.password);
  }

}
