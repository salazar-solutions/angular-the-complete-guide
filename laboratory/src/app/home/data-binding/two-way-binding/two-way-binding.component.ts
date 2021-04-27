import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css'],
})
export class TwoWayBindingComponent implements OnInit {
  @Output() valueChange = new EventEmitter<number>();
  @Input() value: number = 0;
  constructor() {}

  ngOnInit(): void {}
  inc() {
    this.valueChange.emit(++this.value);
  }
  dec() {
    this.valueChange.emit(+--this.value);
  }
}
