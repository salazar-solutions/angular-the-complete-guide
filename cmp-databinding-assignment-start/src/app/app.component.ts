import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  values: number[] = [];

  onTimerTrigger(value: number) {
    console.log("AppComponent: value [%s]", value);
    this.values.push(value);
  }
}
