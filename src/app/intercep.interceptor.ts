import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class IntercepInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const API_KEY = 'API123';
    const TOKEN = 'ja7a8yt&21#fr1&';
    // return next.handle(request);

    return next.handle(request.clone({setHeaders:{API_KEY, TOKEN}}));
  }
}
