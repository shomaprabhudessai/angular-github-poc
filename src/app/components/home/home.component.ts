import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OAuthEvent, OAuthService } from 'angular-oauth2-oidc';
import { UserService } from '../../services/user.service';
import { GithubApiService } from '../../services/github-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  userName: any;
  repositories: any;

  constructor(
    private oAuthService: OAuthService,
    private userService: UserService,
    private router: Router,
    private githubApiService: GithubApiService) {

  }

  ngOnInit() {
    // After successful authentication, ensure that the access token is available
    this.userService.getUserInfo()
      .then((profile) => {
        console.log('User Profile:', profile);
        this.userName = profile.info.login;
        this.getReposByUserName();
        this.getOrgUrl();
        // Handle user profile data as needed
      })
      .catch((error) => {
        console.error('Error fetching user profile:', error);
        // Handle error - redirect to error page or display error message
        // For example, you can redirect to an error page
        //  this.router.navigate(['/error']);
      });
  }

  getReposByUserName() {
    this.githubApiService.getRepositories(this.userName).subscribe(
      (repos: any[]) => {
        this.repositories = repos;
        console.log('repos', this.repositories)
      },
      (error) => {
        console.error('Error fetching repositories:', error);
        // Handle error - display error message or redirect to error page
      }
    );
  }

  getOrgUrl() {
    this.githubApiService.getOrgUrl(this.userName).subscribe(
      (orgs: any[]) => {
        console.log('orgs', orgs)
      },
      (error) => {
        console.error('Error fetching org details:', error);
        // Handle error - display error message or redirect to error page
      }
    );
  }

  logout(): void {
    console.log('logged out')
    this.oAuthService.logOut();
    this.router.navigate(['/login']);
  }


}


// getUserInfo() {
//   this.oAuthService.loadUserProfile().then((profile: any) => {
//     this.userName = profile.name;
//   });
// }

// this.oAuthService.events.subscribe((event: OAuthEvent) => {
//   console.log('event', event)
//   if (event.type === 'token_received') {
//     // this.isLoggedIn = true;
//     this.getUserInfo();
//   }
// });
