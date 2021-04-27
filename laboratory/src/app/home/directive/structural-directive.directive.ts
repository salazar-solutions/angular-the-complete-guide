import {
  Directive,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appStructuralDirective]',
})
export class StructuralDirectiveDirective implements OnChanges {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.viewContainer.clear();
    for (let index = 0; index < this.appStructuralDirective; index++) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  @Input() appStructuralDirective: number = 0;
}
