import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Publication } from './publication.model';
import {
  GetPublicationResponse,
  PostPublicationResponse,
} from './response.model';

import { catchError, debounceTime, map, tap } from 'rxjs/operators';
import { Observable, ObservableInput, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PublicationService {
  private url =
    'https://angular-lab-db-default-rtdb.firebaseio.com/publications';

  _publicationsChanged = new Subject<void>();
  publicationsChanged: Observable<void>;

  constructor(private httpClient: HttpClient) {
    this.publicationsChanged = this._publicationsChanged.pipe(
      debounceTime(500)
    );
  }

  publish(publication: Publication) {
    const observable = this.httpClient
      .post<PostPublicationResponse>(this.url, publication)
      .pipe(
        tap(() => this._publicationsChanged.next()),
        catchError(handleError)
      );

    return observable;
  }

  list() {
    const observable = this.httpClient
      .get<GetPublicationResponse>(this.url)
      .pipe(
        map((response) => {
          const publications: Publication[] = [];

          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              publications.push({ ...response[key], id: key });
            }
          }
          return publications;
        }),
        catchError(handleError)
      );

    return observable;
  }

  detail(id: string) {
    const observable = this.httpClient.get(`${this.url}/${id}`).pipe(
      tap(() => this._publicationsChanged.next()),
      catchError(handleError)
    );

    return observable;
  }

  delete(id: string) {
    const observable = this.httpClient.delete(`${this.url}/${id}`).pipe(
      tap(() => this._publicationsChanged.next()),
      catchError(handleError)
    );

    return observable;
  }

  clear() {
    const observable = this.httpClient.delete(this.url).pipe(
      tap(() => this._publicationsChanged.next()),
      catchError(handleError)
    );

    return observable;
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
  console.log(
    'Server Side Error Status {%s} Message:[%o]',
    status,
    error.error
  );

  return throwError(`Error on server Status ${status} Message:${error.error}`);
}
