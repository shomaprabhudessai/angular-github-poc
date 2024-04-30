import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
// import { OAuthConfig } from '../config/oauth.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   constructor(
    private oAuthService: OAuthService,
    private router: Router
   ) { }

  // login() {
  //   const authUrl = `${OAuthConfig.loginUrl}?client_id=${OAuthConfig.clientId}&redirect_uri=${OAuthConfig.redirectUri}&scope=${OAuthConfig.scope}`;
  //   window.location.href = authUrl;
  // }

  // handleCallback(): void {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const code = urlParams.get('code');
  //   if (code) {
  //     // Handle code and complete authentication process
  //     // Example: Make request to server to exchange code for access token
  //     // Redirect to home page after successful authentication
  //     this.router.navigate(['/']);
  //   } else {
  //     // Handle error
  //     console.error('Authorization code not found');
  //   }
  // }

  // isAuthenticated(): boolean {
  //   // Logic to check if the user is authenticated
  //   return false;
  // }

  // logout(): void {
  //   // Logic to log out the user
  // }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    //your logic goes here
    if (this.oAuthService.hasValidAccessToken()) {
      return true;
    } else {
      // Redirect to the login page if not authenticated
      this.router.navigate(['/login']);
      return false;
    }
  }
}
