import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { FcmMessagingService } from './services/fcm-messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';
  authenticationService: AuthenticationService;

  constructor(private authService: AuthenticationService,
    // private friendsSearchService: FriendsSearchService,
    private fcmService: FcmMessagingService) {
    this.authenticationService = authService;

  }
}
