import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  private apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  getRepositories(username: string): Observable<any[]> {
    const accessToken = sessionStorage.getItem('access_token');

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + accessToken
    });
    const url = `${this.apiUrl}/users/${username}/repos`;
    return this.http.get<any[]>(url, {headers});
  }

  getOrgUrl(username: string): Observable<any[]> {
    const url = `${this.apiUrl}/users/${username}/orgs`;
    return this.http.get<any[]>(url);
  }
}
