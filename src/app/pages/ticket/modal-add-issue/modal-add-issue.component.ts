import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { TicketService } from "../ticket/ticket.service";
import { NbDialogRef } from "@nebular/theme";

@Component({
  selector: "ngx-modal-add-issue",
  templateUrl: "./modal-add-issue.component.html",
  styleUrls: ["./modal-add-issue.component.scss"],
})
export class ModalAddIssueComponent implements OnInit {
  panneInput: string;
  constructor(
    private apollo: Apollo,
    private ticketService: TicketService,
    private dialogRef: NbDialogRef<ModalAddIssueComponent>
  ) {}

  ngOnInit(): void {}

  addIssue() {
    this.apollo
      .mutate<any>({
        mutation: this.ticketService.addIssue(this.panneInput),
      })
      .subscribe(({ data }) => {
        if (data) {
          console.log(data, "issue added ");

          this.dialogRef.close();
        }
      });
  }
}
