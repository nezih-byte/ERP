import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddProfileComponent } from "./add-profile/add-profile.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
  {
    path: "add-profile",
    component: AddProfileComponent,
  },
  {
    path: "list-profile",
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
