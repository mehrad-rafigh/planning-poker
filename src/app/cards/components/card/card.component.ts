import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output
} from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  @Input() value: string;
  @Input() cardColor: { backgroundColor: string; fontColor: string };
  @Input() detailMode = false;
  @Output() clickEvent = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  handleClick(): void {
    this.clickEvent.emit({
      value: this.value,
      card: {
        backgroundColor: this.cardColor.backgroundColor,
        fontColor: this.cardColor.fontColor
      }
    });
  }

  setDetailMode(): string {
    if (this.detailMode) {
      return "detail-mode";
    }
  }

  setFontColor(): string {
    if (this.cardColor.fontColor === "white") {
      return "font-white";
    }
  }
}
