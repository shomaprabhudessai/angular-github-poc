// Create a new service file (e.g., user.service.ts)
import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private oauthService: OAuthService) {}

  getUserInfo(): Promise<any> {
    return this.oauthService.loadUserProfile();
  }
}