import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {CoreModule} from '../../shared/helpers/core/core.module';
import {AccountPageComponent} from '../account-page/account-page.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AccountPageComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    CoreModule,
    FormsModule
  ]
})
export class UsersModule { }
