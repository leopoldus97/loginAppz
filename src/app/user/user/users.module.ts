import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {AccountPageComponent} from '../../account-page/account-page.component';
import {FirebaseModule} from '../../shared/helpers/firebase/firebase.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AccountPageComponent
  ],
  imports: [
    CommonModule,
    FirebaseModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UsersModule { }
