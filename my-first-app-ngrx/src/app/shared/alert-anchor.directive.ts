import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAlertAnchor]',
})
export class AlertAnchorDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
