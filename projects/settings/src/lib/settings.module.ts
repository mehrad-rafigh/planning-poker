import { NgModule } from "@angular/core";
import { SettingsComponent } from "./settings.component";
import { Route, RouterModule } from "@angular/router";

export const routes: Route[] = [
  {
    path: "",
    component: SettingsComponent
  }
];

@NgModule({
  declarations: [SettingsComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [SettingsComponent]
})
export class SettingsModule {}
