import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private location: Location, private router: Router) {}
  back(): void {
    const historyState = this.location.getState();

    if (isHistoryState(historyState) && historyState.navigationId > 1) {
      this.location.back();
    } else {
      this.router.navigateByUrl('/');
    }
  }
}

type HistoryState = {
  navigationId: number;
};

function isHistoryState(x: unknown): x is HistoryState {
  return (
    x !== null &&
    typeof x === 'object' &&
    (<HistoryState>x).navigationId !== undefined
  );
}

// export function isUnknownObject(x: unknown): x is { [key in PropertyKey]: unknown } {
//   return x !== null && typeof x === 'object';
// }
