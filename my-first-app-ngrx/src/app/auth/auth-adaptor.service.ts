import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  LoginRequest,
  LoginResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
  RequestError,
  SignInRequest,
  SignInResponse,
} from './auth-adaptor.model';
import { catchError } from 'rxjs/operators';
import { ObservableInput, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthAdaptorService {
  private API_KEY = 'AIzaSyDd2tyMYvK0hxonuUIEU24bm6UZPCGFKug';
  private url = `https://identitytoolkit.googleapis.com/v1/accounts:[operation]?key=${this.API_KEY}`;

  constructor(private http: HttpClient) {}

  signIn(request: SignInRequest) {
    const url = this.url.replace('[operation]', 'signUp');
    return this.http
      .post<SignInResponse>(url, request)
      .pipe<SignInResponse>(catchError(handleError));
  }

  logIn(request: LoginRequest) {
    const url = this.url.replace('[operation]', 'signInWithPassword');
    return this.http
      .post<LoginResponse>(url, request)
      .pipe<LoginResponse>(catchError(handleError));
  }

  refreshToken(request: RefreshTokenRequest) {
    const url = `https://securetoken.googleapis.com/v1/token?key=${this.API_KEY}`;
    return this.http
      .post<RefreshTokenResponse>(url, request)
      .pipe<RefreshTokenResponse>(catchError(handleError));
  }
}

function handleError(
  httpErrorResponse: HttpErrorResponse
): ObservableInput<any> {
  const { error, status } = httpErrorResponse;
  console.log('Error [%o]', httpErrorResponse);
  if (error instanceof ErrorEvent) {
    console.log('Client Side Error');
    return throwError('Application had a problem to process the request');
  }
  const requestError = new RequestError(error.error);
  console.log('Server Side Error Status {%s} Message:[%o]', status, error);

  return throwError(`Error on server Status ${status} Message:${requestError}`);
}
