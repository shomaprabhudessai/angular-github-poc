import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { OAuthEvent, OAuthService } from 'angular-oauth2-oidc';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrl: './callback.component.scss'
})
export class CallbackComponent implements OnInit {
  isLoggedIn: boolean = false;
  userName: any;
  constructor(
    private oAuthService: OAuthService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router) { 
    }

  ngOnInit(): void {

     // Retrieve authorization code from query parameters
     const code = this.route.snapshot.queryParams['code'];
   

     if (code) {
       this.oAuthService.tryLoginCodeFlow().then(() => {
        // Redirect to home or desired route after successful authentication
        this.router.navigate(['home']);
        console.log('I am in')
      }).catch((error: any) => {
        console.error('Error during code flow login:', error);
        // Handle error - redirect to error page or display error message
      });
     } else {
       console.error('Authorization code not found in callback URL.');
       // Handle error - redirect to error page or display error message
     }
     
  }

}
