import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {AccountPageComponent} from '../account-page/account-page.component';
import {FormsModule} from '@angular/forms';
import {FirebaseModule} from '../../shared/helpers/firebase/firebase.module';


@NgModule({
  declarations: [
    AccountPageComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FirebaseModule,
    FormsModule
  ]
})
export class UsersModule { }
