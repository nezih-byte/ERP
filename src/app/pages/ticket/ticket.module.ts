import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TicketComponent } from "./ticket/ticket.component";
import { TicketRoutingModule } from "./ticket-routing.module";
import { NbStepperModule } from "@nebular/theme";

@NgModule({
  declarations: [TicketComponent],
  imports: [TicketRoutingModule, CommonModule, NbStepperModule],
})
export class TicketModule {}
