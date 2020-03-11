import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewAccountComponent } from './new-account/new-account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import {UsersModule} from './user/user/users.module';
import {FirebaseModule} from './shared/helpers/firebase/firebase.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NewAccountComponent,
    ForgotPasswordComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirebaseModule,
    FormsModule,
    ReactiveFormsModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
