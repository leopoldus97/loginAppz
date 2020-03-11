import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/models/user';
import {AuthenticationService} from '../../shared/services/authentication.service';
import {Observable} from 'rxjs';
import {map, take, tap} from 'rxjs/operators';
import {log} from 'util';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {
  currentUser: User;
  uid: string;
  constructor(public auth: AuthenticationService) { }

  ngOnInit() {
  }

  async updateUser() {
    await this.auth.currentUser.subscribe(u => this.auth.updateUser(u));
  }
}
