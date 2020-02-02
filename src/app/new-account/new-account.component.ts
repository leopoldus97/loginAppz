import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../shared/services/authentication.service';
import {Router} from '@angular/router';
import {User} from '../shared/models/user';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {
  public registrationForm: FormGroup;
  constructor(private auth: AuthenticationService, private fb: FormBuilder, private router: Router) {
    this.registrationForm = this.createForm();
  }

  ngOnInit() {
  }

  private createForm() {
    return this.fb.group({
      displayName: [null, Validators.compose([
        Validators.minLength(4),
        Validators.required
      ])],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.compose([
        Validators.email,
        Validators.required
      ])],
      password: [null, Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])],
      confirmPassword: [null, Validators.required]
    });
  }

  get f() { return this.registrationForm.controls; }

  submit() {
    const user: User = {
      email: this.f.email.value,
      displayName: this.f.displayName.value,
      firstName: this.f.firstName.value,
      lastName: this.f.lastName.value
    };
    this.auth.createUser(user, this.f.password.value);
  }
}
