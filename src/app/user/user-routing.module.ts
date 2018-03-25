import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthenticationGuard } from '../services/authentication.guard';
import { UserFriendsComponent } from './user-friends/user-friends.component';
import { FriendService } from '../services/friend.service';

const ROUTES: Routes = [
  {
    path: '', redirectTo: '/profile', pathMatch:
      'full', canActivate: [AuthenticationGuard]
  },
  {
    path: 'profile', component: UserProfileComponent
    , canActivate: [AuthenticationGuard]
  },
  {
    path: 'friends', component: UserFriendsComponent
    , canActivate: [AuthenticationGuard]
  }


];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthenticationGuard,
    FriendService
  ]
})
export class UserRoutingModule { }