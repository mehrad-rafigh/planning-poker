import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent implements OnInit {
  @Input() value: string;
  @Input() card: { backgroundColor: string; fontColor: string };
  constructor(private router: Router) {
    const state = this.router.getCurrentNavigation().extras.state;

    if (!state) {
      this.router.navigate(["/"]);
    }

    this.card = state.card;
    this.value = state.value;
  }

  ngOnInit() {}
}
