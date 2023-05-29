import { Component, Input, OnInit } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { TicketMagasinListComponent } from "../ticket-magasin-list/ticket-magasin-list.component";

@Component({
  selector: "ngx-btn-open-modal-magasin",
  templateUrl: "./btn-open-modal-magasin.component.html",
  styleUrls: ["./btn-open-modal-magasin.component.scss"],
})
export class BtnOpenModalMagasinComponent implements OnInit {
  @Input() rowData: any;
  constructor(private ngDialog: NbDialogService) {}

  ngOnInit(): void {}
  openModalMagasin() {
    let modal = this.ngDialog.open(TicketMagasinListComponent);
    modal.componentRef.instance.dataTicketSelected = this.rowData;
  }
}
