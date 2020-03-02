import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../shared/services/admin.service';
import {User} from '../../shared/models/user';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  userList: User[];
  constructor(private adminServ: AdminService) { }

  ngOnInit() {
    this.adminServ.getUsers().subscribe(users => this.userList = users);
  }

}
