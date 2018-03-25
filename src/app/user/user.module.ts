import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserFriendsComponent } from './user-friends/user-friends.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { FormsModule } from '@angular/forms';
import { FriendsDatePipe } from '../utils/friendsdate.pipe';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  declarations: [
    UserProfileComponent,
    UserFriendsComponent,
    EditDialogComponent,
    FriendsDatePipe
  ]
})
export class UserModule { }
