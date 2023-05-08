import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ngx-add-ticket",
  templateUrl: "./add-ticket.component.html",
  styleUrls: ["./add-ticket.component.scss"],
})
export class AddTicketComponent implements OnInit {
  firstForm;
  secondForm;
  options = [
    { value: "This is value 1", label: "Oui" },
    { value: "This is value 2", label: "Non" },
  ];
  constructor() {}

  ngOnInit(): void {}
}
