import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TicketComponent } from "./ticket/ticket.component";
import { TicketRoutingModule } from "./ticket-routing.module";
import {
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbStepperModule,
} from "@nebular/theme";
import { ReactiveFormsModule } from "@angular/forms";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { AddTicketComponent } from "./add-ticket/add-ticket.component";

@NgModule({
  declarations: [TicketComponent, AddTicketComponent],
  imports: [
    TicketRoutingModule,
    NbSelectModule,
    CommonModule,
    TicketRoutingModule,
    NbCardModule,
    NbInputModule,

    ReactiveFormsModule,
    NbRadioModule,
    NbButtonModule,
    Ng2SmartTableModule,
  ],
})
export class TicketModule {}
