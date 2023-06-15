import { Component, Input, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { TicketService } from "../ticket/ticket.service";
import { NbToastrService } from "@nebular/theme";

@Component({
  selector: "ngx-toggle-activate",
  templateUrl: "./toggle-activate.component.html",
  styleUrls: ["./toggle-activate.component.scss"],
})
export class ToggleActivateComponent implements OnInit {
  @Input() rowData;
  constructor(
    private apollo: Apollo,
    private ticketService: TicketService,
    private toastr: NbToastrService
  ) {}

  ngOnInit(): void {}

  statusToggleActivate(toggle: boolean) {
    console.log(toggle, "statusToggleActivate");
    this.apollo
      .mutate<any>({
        mutation: this.ticketService.reopenDiag(this.rowData._id),
      })
      .subscribe(({ data }) => {
        if (data) {
          this.toastr.success(
            "",
            "La fenêtre modale a été ouverte avec succès",
            { duration: 5 }
          );
        }
      });
  }
}
