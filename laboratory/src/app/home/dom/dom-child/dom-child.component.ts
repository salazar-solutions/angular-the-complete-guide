import {
  Component,
  ContentChild,
  ElementRef,
  OnInit,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-dom-child',
  templateUrl: './dom-child.component.html',
  styleUrls: ['./dom-child.component.css'],
})
export class DomChildComponent implements OnInit {
  @ContentChild('contentChildSelector')
  contentChildReference?: ElementRef<HTMLSpanElement>;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  boldContentChild() {
    const el = this.contentChildReference?.nativeElement!;
    const style = el.style.fontWeight === 'bold' ? 'normal' : 'bold';
    this.renderer.setStyle(el, 'font-weight', style);
  }
}
