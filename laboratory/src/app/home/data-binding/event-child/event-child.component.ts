import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-event-child',
  templateUrl: './event-child.component.html',
  styleUrls: ['./event-child.component.css'],
})
export class EventChildComponent implements OnInit {
  @Output() addItem = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onAddItem() {
    this.addItem.emit('' + Math.floor(Math.random() * Math.floor(10)));
  }
}
