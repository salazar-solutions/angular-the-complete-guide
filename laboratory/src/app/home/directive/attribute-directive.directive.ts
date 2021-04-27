import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appAttributeDirective]',
})
export class AttributeDirectiveDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @Input() appAttributeDirective: string = '';

  @HostBinding('style.font-weight') fontWeight: string = 'normal';
  @HostBinding('style.color') color: string = 'black';

  @HostListener('input') onTest($event: any) {
    this.appAttributeDirective = this.elementRef.nativeElement.value;
    console.log(this.elementRef.nativeElement.value);
  }

  @HostListener('mouseenter') onMouse() {
    this.fontWeight = 'bold';
    this.color = this.appAttributeDirective;
  }
  @HostListener('mouseleave') onMouseleave() {
    this.fontWeight = 'normal';
    this.color = 'black';
  }

  ngOnInit(): void {}
}
