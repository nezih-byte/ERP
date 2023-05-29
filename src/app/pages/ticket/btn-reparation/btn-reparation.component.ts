import { Component, OnInit } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { ModalReparationComponent } from "../modal-reparation/modal-reparation.component";

@Component({
  selector: "ngx-btn-reparation",
  templateUrl: "./btn-reparation.component.html",
  styleUrls: ["./btn-reparation.component.scss"],
})
export class BtnReparationComponent implements OnInit {
  constructor(private dialogService: NbDialogService) {}

  ngOnInit(): void {}
  openModal() {
    const modal = this.dialogService.open(ModalReparationComponent, {
      closeOnBackdropClick: false,
      closeOnEsc: false,
    });
    // modal.componentRef.instance.ticketId = this.rowData._id;
  }
}
