import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LogInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('request: [%o]', request);

    return next.handle(request).pipe(
      tap((httpEvent) => {
        if (httpEvent.type === HttpEventType.Response) {
          console.log('Response: [%o]', httpEvent.body);
        }
      })
    );
  }
}
