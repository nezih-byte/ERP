import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { TicketService } from "../ticket/ticket.service";

@Component({
  selector: "ngx-add-ticket",
  templateUrl: "./add-ticket.component.html",
  styleUrls: ["./add-ticket.component.scss"],
})
export class AddTicketComponent implements OnInit {
  addTicket = new FormGroup({
    designiation: new FormControl("", []),
    typeClient: new FormControl("", []),
    numSerie: new FormControl("", []),
    emplacement: new FormControl("", []),
    numero: new FormControl("", []),
    techNameSug: new FormControl("", []),
    reparable: new FormControl("", []),
    pdr: new FormControl("", []),
    remarque: new FormControl("", []),
  });

  emplacement = [
    { local: "A0" },
    { local: "A1" },
    { local: "A2" },
    { local: "A3" },
    { local: "A4" },
    { local: "A5" },
  ];

  tec = [
    { local: "Tech 1" },
    { local: "Tech 2" },
    { local: "Tech 3" },
    { local: "Tech 4" },
    { local: "Tech 5" },
    { local: "Tech 6" },
  ];

  options = [
    { value: "This is value 1", label: "Oui" },
    { value: "This is value 2", label: "Non" },
  ];
  options1 = [
    { value: "This is value 1", label: "Oui" },
    { value: "This is value 2", label: "Non" },
  ];
  optionsType = [
    { value: "Societe", label: "Societe" },
    { value: "Client", label: "Client" },
  ];
  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {}

  sendTicket() {
    this.ticketService.addTicket(this.addTicket.value);
  }
}
