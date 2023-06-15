import { Component, Input, OnInit } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { ModalReparationComponent } from "../modal-reparation/modal-reparation.component";

@Component({
  selector: "ngx-btn-reparation",
  templateUrl: "./btn-reparation.component.html",
  styleUrls: ["./btn-reparation.component.scss"],
})
export class BtnReparationComponent implements OnInit {
  @Input() rowData;
  constructor(private dialogService: NbDialogService) {}

  ngOnInit(): void {}
  openModal() {
    const modal = this.dialogService.open(ModalReparationComponent, {
      closeOnBackdropClick: false,
      closeOnEsc: false,
    });
    modal.componentRef.instance.rowData = this.rowData;
  }
}
