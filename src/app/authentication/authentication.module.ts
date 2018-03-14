import { Component, OnInit, NgModule } from '@angular/core';
import {AuthenticationRouting} from './authentication.routing';

import {SignupComponent} from './signup/signup.component';
import {FormsModule} from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service';
import { UserService } from '../services/user.service';

import {CommonModule} from '@angular/common';
import {ErrorAlertComponent} from '../shared/error-alert/error-alert.component';
import {PasswordEqualValidator} from '../utils/password-equal-validator.directive';
import { LoginComponent } from './login/login.component';


@NgModule({
  imports: [
     FormsModule,
     CommonModule,
     AuthenticationRouting
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    ErrorAlertComponent,
    PasswordEqualValidator
  ],
  providers: [
     AuthenticationService,
     UserService
  ]
})
export class AuthenticationModule {
}