import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsComponent implements OnInit {
  @Input() range: string[] = [
    "0",
    "0.5",
    "1",
    "2",
    "3",
    "5",
    "8",
    "13",
    "21",
    "34",
    "55",
    "89",
    "144",
    "?",
    "\u2615",
    "🃏"
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  showCardInDetail($event): void {
    this.router.navigate(["detail"], {
      state: {
        value: $event.value,
        card: {
          backgroundColor: $event.card.backgroundColor,
          fontColor: "white"
        }
      }
    });
  }

  setCardColors(): { backgroundColor: string; fontColor: string } {
    const backgroundColor = this.calculateRandomRGBColor();
    const fontColor = this.shouldFontBeWhite(backgroundColor)
      ? "white"
      : "black";

    return { backgroundColor, fontColor };
  }

  private calculateRandomRGBColor(): string {
    const red = Math.ceil(Math.random() * 255);
    const green = Math.ceil(Math.random() * 255);
    const blue = Math.ceil(Math.random() * 255);
    return `rgb(${red},${green},${blue})`;
  }

  private shouldFontBeWhite(backgroundColor: string): boolean {
    const sp = backgroundColor
      .replace("rgb", "")
      .replace("(", "")
      .replace(")", "")
      .split(",");

    const red = Number(sp[0]);
    const blue = Number(sp[1]);
    const green = Number(sp[2]);

    return red < 100 || blue < 100 || green < 100;
  }
}
