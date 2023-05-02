import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableClientComponent } from "./table-client/table-client.component";
import { AddClientComponent } from "./add-client/add-client.component";
import { ClientRoutingModule } from "./table-client-routing.module";
import {
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbRadioModule,
  NbStepperModule,
} from "@nebular/theme";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [TableClientComponent, AddClientComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    NbCardModule,
    NbInputModule,
    NbStepperModule,
    ReactiveFormsModule,
    NbRadioModule,
    NbButtonModule,
  ],
})
export class TableClietModule {}
