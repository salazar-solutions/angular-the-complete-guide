import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { RefreshTokenRequest, SignInRequest, User } from './auth-adaptor.model';
import { AuthAdaptorService } from './auth-adaptor.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router,
    private authAdaptorService: AuthAdaptorService
  ) {}
  private user: User;
  autenticated = new Subject<User>();
  private refreshTokenTimer: any;

  isAuthenticated() {
    const isAuthenticated = this.user ? true : false;
    return isAuthenticated;
  }

  isExpired() {
    if (this.user.expirationDate < new Date()) return true;
    return false;
  }

  getPrincipal() {
    return this.user;
  }

  authenticate(user: User, redirect?: boolean) {
    this.user = user;
    this.autenticated.next(this.user);
    localStorage.setItem('userData', JSON.stringify(user));

    this.resfreshToken();

    if (redirect) this.router.navigate(['/recipes']);
  }

  loadPrincipal() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (!userData) return;
    const user = User.get(userData);
    this.authenticate(user);
  }

  logOut() {
    this.user = undefined;
    this.autenticated.next(this.user);
    localStorage.removeItem('userData');
    this.router.navigate(['/auth']);
    if (this.refreshTokenTimer) {
      clearTimeout(this.refreshTokenTimer);
    }
    this.refreshTokenTimer = undefined;
  }

  private updateToken() {
    const { refreshToken } = this.user;
    this.authAdaptorService
      .refreshToken(new RefreshTokenRequest(refreshToken))
      .subscribe((response) => {
        const user = User.fromRefreshTokenResponse(response, this.user);
        this.authenticate(user, false);
      });
  }

  private resfreshToken() {
    console.log('this.user.expirationDate [%s]', this.user.expirationDate);
    const expirationDuration =
      this.user.expirationDate.getTime() - new Date().getTime();

    if (this.refreshTokenTimer) {
      clearTimeout(this.refreshTokenTimer);
    }

    this.refreshTokenTimer = setTimeout(() => {
      this.updateToken();
    }, expirationDuration);
  }
}
