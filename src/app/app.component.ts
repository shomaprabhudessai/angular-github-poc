import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { authCodeFlowConfig } from './config/oauth.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'github-angular-integration';
  isLoggedIn: boolean = false;
  userName: any;
  constructor(private oAuthService: OAuthService) {
    this.configureSingleSignOn();
   }
  configureSingleSignOn() {
      this.oAuthService.setStorage(sessionStorage);
      this.oAuthService.configure(authCodeFlowConfig);
      this.oAuthService.tokenValidationHandler = new JwksValidationHandler();
  }
}
