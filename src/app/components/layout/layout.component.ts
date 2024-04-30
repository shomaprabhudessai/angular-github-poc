import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  userName: any;

  constructor(
    private oAuthService: OAuthService,
    private router: Router) { }
    
  logout(): void {
    console.log('logged out')
    this.oAuthService.logOut();
    this.router.navigate(['/login']);
  }
}
