import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Add headers to the request
    const modifiedRequest = request.clone({
      setHeaders: {
        'Accept': 'application/json', // Add any custom headers here
        // Add more headers as needed
      }
    });

    // Pass the modified request to the next interceptor or handler
    return next.handle(modifiedRequest);
  }
}