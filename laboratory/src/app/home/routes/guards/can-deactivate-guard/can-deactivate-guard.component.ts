import { Component, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CanDeactivateComponent } from '../can-deacivate-guard.service';

@Component({
  selector: 'app-can-deactivate-guard',
  templateUrl: './can-deactivate-guard.component.html',
  styleUrls: ['./can-deactivate-guard.component.css'],
})
export class CanDeactivateGuardComponent
  implements OnInit, CanDeactivateComponent {
  active: boolean = false;

  constructor() {}

  canDeactivate(
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.active;
  }

  ngOnInit(): void {}

  toogle() {
    this.active = !this.active;
  }
}
