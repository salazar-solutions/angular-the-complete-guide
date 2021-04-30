import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { DropdownDirective } from './dropdown.directive';
import { SpinnerComponent } from './spinner/spinner.component';
import { AlertAnchorDirective } from './alert-anchor.directive';

@NgModule({
  declarations: [
    AlertAnchorDirective,
    SpinnerComponent,
    AlertComponent,
    DropdownDirective,
  ],
  imports: [CommonModule],
  exports: [
    AlertAnchorDirective,
    SpinnerComponent,
    AlertComponent,
    DropdownDirective,
    CommonModule,
  ],
})
export class SharedModule {}
