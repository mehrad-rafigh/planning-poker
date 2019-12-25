import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CardComponent } from "./card.component";
import { ChangeDetectionStrategy, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe("CardComponent", () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent]
    })
      .overrideComponent(CardComponent, {
        set: {
          changeDetection: ChangeDetectionStrategy.Default
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    component.value = "0.5";
    component.cardColor = {
      fontColor: "white",
      backgroundColor: "rgb(100,100,100)"
    };
    component.detailMode = false;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should match the snapshot", () => {
    expect(fixture).toMatchSnapshot();
  });

  it("should render value in top right and bottom left corners", () => {
    const spanTopRightCorner: HTMLSpanElement = debugElement.query(
      By.css(".top-right")
    ).nativeElement;
    const spanBottomLeftCorner: HTMLSpanElement = debugElement.query(
      By.css(".bottom-left")
    ).nativeElement;

    expect(spanBottomLeftCorner.innerHTML).toBe("0.5");
    expect(spanTopRightCorner.innerHTML).toBe("0.5");
  });

  it("should render value in center when detail mode is on", () => {
    component.detailMode = true;
    fixture.detectChanges();

    const spanInCenterDebugEl = debugElement.query(By.css(".half-h"));
    const spanTopRightCorner = debugElement.query(By.css(".top-right"));
    const spanBottomLeftCorner = debugElement.query(By.css(".bottom-left"));

    expect(spanInCenterDebugEl.classes["detail-mode"]).toBeTruthy();
    expect(spanInCenterDebugEl.nativeElement.innerHTML).toBe("0.5");
    expect(spanTopRightCorner).toBeFalsy();
    expect(spanBottomLeftCorner).toBeFalsy();
    expect(fixture).toMatchSnapshot();
  });

  it("should handle click events", () => {
    component.clickEvent.emit = jest.fn();

    const divElementDebugElement = debugElement.query(By.css(".card"));
    divElementDebugElement.triggerEventHandler("click", null);

    expect(component.clickEvent.emit).toHaveBeenCalledWith({
      value: "0.5",
      card: {
        backgroundColor: "rgb(100,100,100)",
        fontColor: "white"
      }
    });
  });
});
