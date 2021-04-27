import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AnchorDirective } from './anchor.directive';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { FormDialogComponent } from './formdialog/form-dialog.component';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css'],
})
export class DynamicComponent implements OnInit {
  @ViewChild(AnchorDirective) anchor?: AnchorDirective;
  answer?: string;
  constructor(private factoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {}

  showConfirmDialog() {
    if (!this.anchor) return;
    const subscriptions: Subscription[] = [];
    const factory = this.factoryResolver.resolveComponentFactory(
      ConfirmationDialogComponent
    );
    this.anchor.viewContainerRef.clear();
    const reference = this.anchor.viewContainerRef.createComponent(factory);
    reference.instance.message = 'Do you accept this conditions?';
    let subscription = reference.instance.close.subscribe(() => {
      this.anchor?.viewContainerRef.clear();
      subscriptions.forEach((d) => d.unsubscribe());
      this.answer = 'Close';
    });
    subscriptions.push(subscription);
    subscription = reference.instance.cancel.subscribe(() => {
      this.anchor?.viewContainerRef.clear();
      subscriptions.forEach((d) => d.unsubscribe());
      this.answer = 'Cancel';
    });
    subscriptions.push(subscription);
    subscription = reference.instance.accept.subscribe(() => {
      this.anchor?.viewContainerRef.clear();
      subscriptions.forEach((d) => d.unsubscribe());
      this.answer = 'Accept';
    });
    subscriptions.push(subscription);
  }

  showFormDialog() {
    if (!this.anchor) return;
    const subscriptions: Subscription[] = [];
    const factory = this.factoryResolver.resolveComponentFactory(
      FormDialogComponent
    );
    this.anchor.viewContainerRef.clear();
    const reference = this.anchor.viewContainerRef.createComponent(factory);
    let subscription = reference.instance.close.subscribe(() => {
      this.anchor?.viewContainerRef.clear();
      subscriptions.forEach((d) => d.unsubscribe());
      this.answer = 'Close';
    });
    subscriptions.push(subscription);
    subscription = reference.instance.cancel.subscribe(() => {
      this.anchor?.viewContainerRef.clear();
      subscriptions.forEach((d) => d.unsubscribe());
      this.answer = 'Cancel';
    });
    subscriptions.push(subscription);
    subscription = reference.instance.submit.subscribe((message) => {
      this.anchor?.viewContainerRef.clear();
      subscriptions.forEach((d) => d.unsubscribe());
      this.answer = message;
    });
    subscriptions.push(subscription);
  }
}
