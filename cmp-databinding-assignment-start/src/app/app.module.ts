import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { GameControlComponent } from "./game-control/game-control.component";
import { OddComponent } from "./parity/odd/odd.component";
import { EvenComponent } from "./parity/even/even.component";
import { ParityComponent } from "./parity/parity.component";

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    ParityComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
