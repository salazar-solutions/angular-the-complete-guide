import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { AuthAdaptorService } from '../auth/auth-adaptor.service';
import {
  RefreshTokenRequest,
  RefreshTokenResponse,
  User,
} from '../auth/auth-adaptor.model';
import { exhaustMap } from 'rxjs/operators';

// Can't be used because it cause recursive beahviour calling itself
@Injectable()
export class RefreshtokenInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private authAdaptorService: AuthAdaptorService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const user = this.authService.getPrincipal();

    if (!user) return next.handle(request);

    console.log(
      'RefreshtokenInterceptor - expirationDate:[%s] date:[%s] isExpired[%s] ',
      user.expirationDate,
      new Date(),
      user.expirationDate < new Date()
    );

    if (!user || !this.authService.isExpired()) return next.handle(request);
    const { refreshToken } = user;

    return this.authAdaptorService
      .refreshToken(new RefreshTokenRequest(refreshToken))
      .pipe(
        exhaustMap((response) => {
          this.updateToken(response);
          return next.handle(request);
        })
      );
  }

  updateToken(response: RefreshTokenResponse) {
    const currentUser = this.authService.getPrincipal();
    const user = User.fromRefreshTokenResponse(response, currentUser);
    this.authService.authenticate(user);
  }
}
