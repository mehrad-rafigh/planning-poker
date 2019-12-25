import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { routes } from "./app-routing.module";
import { Router } from "@angular/router";
import { CardsComponent } from "./cards/components/cards/cards.component";
import { DetailComponent } from "./cards/components/detail/detail.component";
import { CardComponent } from "./cards/components/card/card.component";
import { ToolbarComponent } from "./toolbar/components/toolbar/toolbar.component";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe("AppComponent", () => {
  let router: Router;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [
        AppComponent,
        CardsComponent,
        DetailComponent,
        CardComponent,
        ToolbarComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    router = TestBed.inject<Router>(Router);

    router.initialNavigation();
    fixture.detectChanges();
  });

  it("should create the app component", () => {
    expect(component).toBeTruthy();
  });

  it("should match the snaphshot", () => {
    expect(fixture).toMatchSnapshot();
  });

  it("should render planning poker cards container", () => {
    const cards = debugElement.query(By.directive(CardsComponent));
    expect(cards).toBeTruthy();
  });
});
