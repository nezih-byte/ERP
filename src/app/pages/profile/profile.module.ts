import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileComponent } from "./profile/profile.component";
import { AddProfileComponent } from "./add-profile/add-profile.component";
import { ProfileRoutingModule } from "./profile.routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import {
  NbSelectModule,
  NbCardModule,
  NbInputModule,
  NbRadioModule,
  NbButtonModule,
} from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";

@NgModule({
  declarations: [ProfileComponent, AddProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    NbSelectModule,
    CommonModule,

    NbCardModule,
    NbInputModule,

    ReactiveFormsModule,
    NbRadioModule,
    NbButtonModule,
    Ng2SmartTableModule,
  ],
})
export class ProfileModule {}
