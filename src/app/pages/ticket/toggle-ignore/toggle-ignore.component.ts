import { Component, Input, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { TicketService } from "../ticket/ticket.service";
import { NbToastrService } from "@nebular/theme";

@Component({
  selector: "ngx-toggle-ignore",
  templateUrl: "./toggle-ignore.component.html",
  styleUrls: ["./toggle-ignore.component.scss"],
})
export class ToggleIgnoreComponent implements OnInit {
  @Input() rowData;
  constructor(
    private apollo: Apollo,
    private ticketService: TicketService,
    private toastr: NbToastrService
  ) {}

  ngOnInit(): void {}

  statusToggleIgnored(isIgnored: boolean) {
    console.log(isIgnored, "isIgnored");
    this.apollo
      .mutate<any>({
        mutation: this.ticketService.isReturnTicket(
          this.rowData._id,
          isIgnored
        ),
      })
      .subscribe(({ data }) => {
        if (data) {
          this.toastr.danger("", "Retour de ticket");
        }
      });
  }
}
