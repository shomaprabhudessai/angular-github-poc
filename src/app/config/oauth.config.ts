// export const OAuthConfig = {
//     clientId: ' Iv1.09d71ec807cfd2db',
//     redirectUri: 'http://localhost:4200/callback',
//     responseType: 'code',
//     scope: 'user',
//     loginUrl: 'https://github.com/login/oauth/authorize',
//     tokenEndpoint: 'https://github.com/login/oauth/access_token',
//   };

import { AuthConfig } from "angular-oauth2-oidc";

export const authCodeFlowConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'https://github.com/',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/callback',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  // clientId: 'server.code',
  clientId: 'ad38995be9da87f7d9ca',
 // dummyClientSecret: 'test',

  // Just needed if your auth server demands a secret. In general, this
  // is a sign that the auth server is not configured with SPAs in mind
  // and it might not enforce further best practices vital for security
  // such applications.
   dummyClientSecret: 'fbdf3ccfad37a5115fab446b762327f64c232248',

  // responseType: 'code',
  responseType: 'urlencoded',


  // set the scope for the permissions the client should request
  // The first four are defined by OIDC.
  // Important: Request offline_access to get a refresh token
  // The api scope is a usecase specific one
  scope: 'openid profile email offline_access api user',
  loginUrl: 'https://github.com/login/oauth/authorize', // This is the login URL for GitHub OAuth
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  showDebugInformation: true,
  requestAccessToken: true,
  requireHttps: false,
  clearHashAfterLogin: true, // Whether to clear the hash fragment after successful login
  userinfoEndpoint: 'https://api.github.com/user', // GitHub's UserInfo endpoint URL

  oidc: false,
};