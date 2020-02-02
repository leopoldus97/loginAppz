import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountPageComponent} from './account-page/account-page.component';
import {AuthGuard} from './shared/helpers/auth.guard';
import {LoginPageComponent} from './login-page/login-page.component';
import {NewAccountComponent} from './new-account/new-account.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';


const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'account', component: AccountPageComponent},
  { path: 'create-user', component: NewAccountComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
