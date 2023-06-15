import { Component, Input, OnInit } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { ModalAdminsComponent } from "../modal-admins/modal-admins.component";

@Component({
  selector: "ngx-btn-admins",
  templateUrl: "./btn-admins.component.html",
  styleUrls: ["./btn-admins.component.scss"],
})
export class BtnAdminsComponent implements OnInit {
  @Input() rowData;
  constructor(private nbDialog: NbDialogService) {}

  ngOnInit(): void {}
  openModalAdmins() {
    let modal = this.nbDialog.open(ModalAdminsComponent, {
      closeOnEsc: true,
      closeOnBackdropClick: true,
    });
    modal.componentRef.instance.rowData = this.rowData;
  }
}
