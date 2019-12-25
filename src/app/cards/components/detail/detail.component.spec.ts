import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DetailComponent } from "./detail.component";
import { ToolbarComponent } from "../../../toolbar/components/toolbar/toolbar.component";
import { CardComponent } from "../card/card.component";
import { RouterTestingModule } from "@angular/router/testing";
import { CardsComponent } from "../cards/cards.component";
import { Router } from "@angular/router";

describe("DetailComponent", () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        DetailComponent,
        ToolbarComponent,
        CardComponent,
        CardsComponent
      ],
      providers: [
        {
          provide: Router,
          useClass: class RouterSub {
            getCurrentNavigation() {
              return {
                extras: {
                  state: {
                    card: {
                      backgroundColor: "rgb(100,100,100)",
                      fontColor: "white"
                    },
                    value: ""
                  }
                }
              };
            }
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);

    component.card = {
      backgroundColor: "rgb(100,100,100)",
      fontColor: "white"
    };
    component.value = "0.5";

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should match the snapshot", () => {
    expect(fixture).toMatchSnapshot();
  });
});
