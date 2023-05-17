import { Component, Input, OnInit } from "@angular/core";
import { ModalTicketComponent } from "../modal-ticket/modal-ticket.component";
import { NbDialogService } from "@nebular/theme";

@Component({
  selector: "ngx-btn-open-ticket-modal",
  templateUrl: "./btn-open-ticket-modal.component.html",
  styleUrls: ["./btn-open-ticket-modal.component.scss"],
})
export class BtnOpenTicketModalComponent implements OnInit {
  @Input() rowData: any;
  constructor(private dialogService: NbDialogService) {}

  ngOnInit(): void {}

  openModal() {
    console.log(this.rowData._id, "id");
    const modal = this.dialogService.open(ModalTicketComponent, {
      closeOnBackdropClick: false,
      closeOnEsc: false,
    });
    modal.componentRef.instance.ticketId = this.rowData._id;
  }
}
