import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SignupComponent} from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from '../home/home.component';

export const ROUTES: Routes = [
    {path:"home",component:HomeComponent},
   {path: 'login', component: LoginComponent},
   {path: 'signup', component: SignupComponent}
];

/**
 * Authentication Routing Module
 */
@NgModule({
   imports: [
      RouterModule.forChild(ROUTES)
   ],
   exports: [
      RouterModule
   ]
})
export class AuthenticationRouting {
}