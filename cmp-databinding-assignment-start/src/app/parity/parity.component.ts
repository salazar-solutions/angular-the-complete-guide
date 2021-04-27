import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";

enum ValueType {
  Odd = "odd",
  Even = "even",
}

@Component({
  selector: "app-parity",
  templateUrl: "./parity.component.html",
  styleUrls: ["./parity.component.css"],
})
export class ParityComponent implements OnInit, OnChanges {
  type: ValueType | undefined;
  @Input() value: number;
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ParityComponent: " + changes);
    this.type = this.value % 2 === 0 ? ValueType.Even : ValueType.Odd;
  }

  ngOnInit(): void {}
}
