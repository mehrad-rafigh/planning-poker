import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CardsComponent } from "./cards/components/cards/cards.component";
import { DetailComponent } from "./cards/components/detail/detail.component";

const routes: Routes = [
  {
    path: "",
    component: CardsComponent
  },
  {
    path: "detail",
    component: DetailComponent
  },
  {
    path: "settings",
    loadChildren: () =>
      import("../../projects/settings/src/lib/settings.module").then(
        module => module.SettingsModule
      )
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
