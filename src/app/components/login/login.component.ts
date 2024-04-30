import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AuthConfig, OAuthEvent, OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from '../../config/oauth.config';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  isLoggedIn: boolean = false;
  userName: any;

  constructor(
    private oAuthService: OAuthService,
    private router: Router) {
  }

  ngOnInit() {
    this.isLoggedIn = this.isAuthenticated();
    if (this.isLoggedIn) {
      // Redirect to home page if already logged in
      this.router.navigate(['/home']);
    }
  }

  isAuthenticated(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  login(): void {
    this.oAuthService.initLoginFlow();
  }

  logout(): void {
    console.log('clicked')
    this.oAuthService.logOut();
  }
}
