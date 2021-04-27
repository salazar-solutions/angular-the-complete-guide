import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class')
  cssClass: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('document:click', ['$event']) onClick(event: Event) {
    console.log('DropdownDirective:[%s]', this.cssClass);
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.cssClass = undefined;
      return;
    }
    if (!this.cssClass) {
      this.cssClass = 'open';
    } else {
      this.cssClass = undefined;
    }
  }
}
