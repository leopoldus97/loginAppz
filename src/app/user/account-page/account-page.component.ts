import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/models/user';
import {AuthenticationService} from '../../shared/services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {
  password: '';
  constructor(public auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  update(user: User) {
    this.auth.update(user);
  }

  changePassword() {
    this.auth.changePassword(this.password);
  }

  goToAdminPage() {
    this.router.navigateByUrl('/admin');
  }
}
