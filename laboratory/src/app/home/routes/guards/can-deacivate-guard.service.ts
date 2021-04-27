import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

export interface CanDeactivateComponent {
  canDeactivate(
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree;
}

@Injectable({
  providedIn: 'root',
})
export class CanDeacivateGuardService
  implements CanDeactivate<CanDeactivateComponent> {
  constructor() {}
  canDeactivate(
    component: CanDeactivateComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return component.canDeactivate(currentRoute, currentState, nextState);
  }
}
