import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent implements OnInit {

  constructor(private authService: AuthenticationService,
    private router: Router) {
  }

  onLogout(): void {
    this.authService.signout().then(() => {
      this.navigateToLogin();
    });
  }

  navigateToLogin() {
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {
  }

}
