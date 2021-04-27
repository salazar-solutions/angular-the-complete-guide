import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  interpolatedText: string = 'I am an interpolated Text';
  colors: string[] = ['green', 'red', 'yellow'];
  color: string = 'white';
  rand: number = 0;
  items: string[] = ['1', '2', '3'];
  myTwoWayValue: number = 0;

  constructor() {}

  ngOnInit(): void {}

  randomNumber() {
    this.rand = Math.floor(Math.random() * Math.floor(10));
  }

  setColor(color: string) {
    this.color = color;
  }

  onAddItem(item: string) {
    this.items.push(item);
  }
}
