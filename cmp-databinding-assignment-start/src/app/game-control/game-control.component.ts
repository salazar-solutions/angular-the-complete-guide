import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  @Output() timerTriggered = new EventEmitter<number>();
  counter = 0;
  timer: number;

  constructor() {}

  ngOnInit(): void {}

  startGame() {
    this.timer = window.setInterval(() => {
      this.timerTriggered.emit(this.counter++);
      console.log("GameControlComponent:[%s]", this.counter);
    }, 1000);
  }

  stopGame() {
    clearInterval(this.timer);
  }
}
