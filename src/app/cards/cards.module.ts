import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardsComponent } from "./components/cards/cards.component";
import { ToolbarModule } from "../toolbar/toolbar.module";
import { CardComponent } from "./components/card/card.component";
import { DetailComponent } from "./components/detail/detail.component";

@NgModule({
  declarations: [CardsComponent, CardComponent, DetailComponent],
  imports: [CommonModule, ToolbarModule],
  exports: [CardsComponent, DetailComponent]
})
export class CardsModule {}
