import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AccountPageComponent } from './account-page/account-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {CoreModule} from './shared/helpers/core/core.module';
import { NewAccountComponent } from './new-account/new-account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AccountPageComponent,
    NewAccountComponent,
    ForgotPasswordComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
