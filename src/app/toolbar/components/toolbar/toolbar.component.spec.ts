import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ToolbarComponent } from "./toolbar.component";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe("ToolbarComponent", () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should match the snapshot", () => {
    expect(fixture).toMatchSnapshot();
  });

  it("should display the app name", () => {
    const span: HTMLSpanElement = debugElement.query(By.css("span"))
      .nativeElement;
    expect(span.innerHTML).toBe("Planning Poker");
  });
});
