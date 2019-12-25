import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CardsComponent } from "./cards.component";
import { RouterTestingModule } from "@angular/router/testing";
import { DebugElement } from "@angular/core";
import { Router } from "@angular/router";
import { CardComponent } from "../card/card.component";
import { By } from "@angular/platform-browser";
import { ToolbarComponent } from "../../../toolbar/components/toolbar/toolbar.component";
import { compilePipeFromMetadata } from "@angular/compiler";

describe("CardsComponent", () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;
  let debugElement: DebugElement;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CardsComponent, CardComponent, ToolbarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    component.range = [
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
    debugElement = fixture.debugElement;
    router = TestBed.inject(Router);

    component.calculateRandomRGBColor = jest
      .fn()
      .mockImplementation(() => "rgb(116, 254, 117)");

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should match the snapshot", () => {
    expect(fixture).toMatchSnapshot();
  });
});
