import {
  Component,
  ContentChild,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-dom',
  templateUrl: './dom.component.html',
  styleUrls: ['./dom.component.css'],
})
export class DomComponent implements OnInit {
  constructor(private renderer: Renderer2) {}
  @ViewChild('viewChildSelector') childReference?: ElementRef<HTMLSpanElement>;

  ngOnInit(): void {}

  doNothing() {}

  boldViewChild() {
    const el = this.childReference?.nativeElement!;
    const style = el.style.fontWeight === 'bold' ? 'normal' : 'bold';
    this.renderer.setStyle(el, 'font-weight', style);
  }
}
