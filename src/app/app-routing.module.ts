import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {NewAccountComponent} from './new-account/new-account.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {AdminPageComponent} from './admin/admin-page/admin-page.component';
import {AdminGuard} from './shared/helpers/admin.guard';


const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'account', loadChildren: './user/users/users.module#UsersModule'},
  { path: 'create-user', component: NewAccountComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'admin', component: AdminPageComponent, canActivate: [AdminGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
