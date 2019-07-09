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
  @Input() value: number;
  @Input() cardColor: { backgroundColor: string; fontColor: string };
  @Input() detailMode = false;
  @Output() clickEvent = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  handleClick() {
    this.clickEvent.emit({
      value: this.value,
      cardColor: {
        backgroundColor: this.cardColor.backgroundColor,
        fontColor: this.cardColor.fontColor
      }
    });
  }

  setDetailMode() {
    if (this.detailMode) {
      return "detail-mode";
    }
  }

  setFontColor() {
    if (this.cardColor.fontColor === "white") {
      return "font-white";
    }
  }
}
