import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CardsComponent } from "./cards/components/cards/cards.component";
import { DetailComponent } from "./cards/components/detail/detail.component";

export const routes: Routes = [
  {
    path: "",
    component: CardsComponent
  },
  {
    path: "detail",
    component: DetailComponent
  },
  {
    path: "**",
    component: CardsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "top"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
