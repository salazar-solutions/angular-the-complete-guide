import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { AnchorDirective } from '../anchor.directive';
import { FormComponent, FormValue } from './form/form.component';

@Component({
  selector: 'app-formdialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css'],
})
export class FormDialogComponent implements OnInit, AfterViewInit {
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<string>();
  @Output() cancel = new EventEmitter<void>();
  @ViewChild(AnchorDirective) anchor?: AnchorDirective;

  constructor(
    private factoryResolver: ComponentFactoryResolver,
    private changeDetectorRef: ChangeDetectorRef
  ) {}
  ngAfterViewInit(): void {
    console.log('FormDialogComponent');
    this.showComnponent();
  }

  ngOnInit(): void {}

  onSubmit(value: FormValue) {
    this.submit.emit(JSON.stringify(value));
  }

  onClose() {
    this.close.emit();
  }

  onCancel() {
    this.cancel.emit();
  }

  showComnponent() {
    if (!this.anchor) return;
    const factory = this.factoryResolver.resolveComponentFactory(FormComponent);
    this.anchor.viewContainerRef.clear();
    const componentRef = this.anchor.viewContainerRef.createComponent(factory);
    this.changeDetectorRef.detectChanges();
    const subscription = componentRef.instance.submit.subscribe(($event) => {
      if (!this.anchor) return;
      this.onSubmit($event);
      subscription.unsubscribe();
      this.anchor.viewContainerRef.clear();
    });
    console.log('HHHHHHHHHHHHHHHHHHH');
  }
}
