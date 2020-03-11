import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../shared/services/admin.service';
import {User} from '../../shared/models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  userList: User[];
  constructor(private adminServ: AdminService, private router: Router) { }

  ngOnInit() {
    this.adminServ.getUsers().subscribe(users => this.userList = users);
  }
  changeRole(user: User, role: string) {
    this.adminServ.changeRole(user, role);
  }
  deleteUser(user: User) {
    this.adminServ.deleteUser(user);
  }
  blockUser(user: User, block: boolean) {
    this.adminServ.blockUser(user, block);
  }
  goBack() {
    this.router.navigateByUrl('/account');
  }

}
