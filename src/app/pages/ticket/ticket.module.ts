import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TicketComponent } from "./ticket/ticket.component";
import { TicketRoutingModule } from "./ticket-routing.module";
import {
  NbBadgeModule,
  NbButtonModule,
  NbCardModule,
  NbInfiniteListDirective,
  NbInputModule,
  NbListModule,
  NbRadioModule,
  NbSelectModule,
  NbStepperModule,
  NbTagModule,
} from "@nebular/theme";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { AddTicketComponent } from "./add-ticket/add-ticket.component";
import { ModalTicketComponent } from "./modal-ticket/modal-ticket.component";
import { BtnOpenTicketModalComponent } from "./btn-open-ticket-modal/btn-open-ticket-modal.component";
import { BtnReparationComponent } from "./btn-reparation/btn-reparation.component";
import { ModalReparationComponent } from "./modal-reparation/modal-reparation.component";
import { TicketMagasinListComponent } from "./ticket-magasin-list/ticket-magasin-list.component";
import { TicketMagasinModalComponent } from "./ticket-magasin-modal/ticket-magasin-modal.component";
import { ModalAddIssueComponent } from "./modal-add-issue/modal-add-issue.component";
import { AddLocationComponent } from "./add-location/add-location.component";
import { BtnOpenModalMagasinComponent } from "./btn-open-modal-magasin/btn-open-modal-magasin.component";

@NgModule({
  declarations: [
    TicketComponent,
    AddTicketComponent,
    ModalTicketComponent,
    BtnOpenTicketModalComponent,
    BtnReparationComponent,
    ModalReparationComponent,
    TicketMagasinListComponent,
    TicketMagasinModalComponent,
    ModalAddIssueComponent,
    AddLocationComponent,
    BtnOpenModalMagasinComponent,
  ],
  imports: [
    NbSelectModule,
    CommonModule,
    TicketRoutingModule,
    NbCardModule,
    NbInputModule,
    ReactiveFormsModule,
    NbRadioModule,
    NbButtonModule,
    Ng2SmartTableModule,
    FormsModule,
    NbTagModule,
    NbBadgeModule,
    NbListModule,
  ],
})
export class TicketModule {}
