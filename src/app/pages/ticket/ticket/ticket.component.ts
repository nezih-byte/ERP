import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ngx-ticket",
  templateUrl: "./ticket.component.html",
  styleUrls: ["./ticket.component.scss"],
})
export class TicketComponent implements OnInit {
  firstForm;
  secondForm;
  options = [
    { value: "This is value 1", label: "Option 1" },
    { value: "This is value 2", label: "Option 2" },
  ];
  constructor() {}

  ngOnInit(): void {}
}
