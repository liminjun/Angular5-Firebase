import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../services/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  errorMessage: string;
  showError: boolean;
  private user: User;

  constructor(
    private userService: UserService,
    private router: Router,
    private authService: AuthenticationService,
    private angularFireAuth: AngularFireAuth
  ) {
      
    this.angularFireAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.getUserInfo(user.uid);
      }
    });
  }

  ngOnInit() {
  }

  onLogin(loginFormData): void {
    this.authService.login(loginFormData.value.email,
      loginFormData.value.password).then((userInfo) => {
        const uid: string = userInfo.uid;
        this.getUserInfo(uid);
      }).catch((error) => {
        this.errorMessage = error.message;
        this.showError = true;
      });
  }
  private navigateToUserProfile(){
    this.router.navigateByUrl('/profile');
  }
  private getUserInfo(uid: string) {
    this.userService.getUser(uid).subscribe(snapshot => {
      this.user = snapshot;
      this.navigateToUserProfile();
    });
  }

  onReset(resetFormData): void {
    this.authService.resetPassword(resetFormData.value.email).then(() =>   
    {
      alert('Reset instruction sent to your mail');
    }).catch((error) => {
      this.errorMessage = error.message;
      this.showError = true;
    });
  }

}
