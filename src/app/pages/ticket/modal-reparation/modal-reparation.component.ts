import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { NbDialogRef } from "@nebular/theme";
import { Apollo } from "apollo-angular";
import { ModalTicketComponent } from "../modal-ticket/modal-ticket.component";
import { TicketService } from "../ticket/ticket.service";

@Component({
  selector: "ngx-modal-reparation",
  templateUrl: "./modal-reparation.component.html",
  styleUrls: ["./modal-reparation.component.scss"],
})
export class ModalReparationComponent implements OnInit {
  @Input() rowData: any;
  updateTicket = new FormGroup({
    designiation: new FormControl("", [Validators.required]),
    typeClient: new FormControl("", [Validators.required]),
    numSerie: new FormControl("", [Validators.required]),
    numero: new FormControl("", [Validators.required]),
    assignedTo: new FormControl("", [Validators.required]),
    reparable: new FormControl("", [Validators.required]),
    pdr: new FormControl("", [Validators.required]),
    remarque: new FormControl("", [Validators.required]),
    emplacement: new FormControl("", [Validators.required]),
  });

  ticketId: string;
  constructor(
    private dialogRef: NbDialogRef<ModalTicketComponent>,
    private ticketService: TicketService,
    private apollo: Apollo
  ) {}

  ngOnInit(): void {}

  updateTicketConfirm() {}
}
