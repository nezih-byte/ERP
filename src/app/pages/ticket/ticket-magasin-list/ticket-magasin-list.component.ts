import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "ngx-ticket-magasin-list",
  templateUrl: "./ticket-magasin-list.component.html",
  styleUrls: ["./ticket-magasin-list.component.scss"],
})
export class TicketMagasinListComponent implements OnInit {
  dataTicketSelected;
  magasinField = new FormGroup({
    etat: new FormControl(null, [Validators.required]),
  });
  optionMagasin = ["Interne", "Internet interne", "Externe"];
  constructor() {}

  ngOnInit(): void {
    console.log(this.dataTicketSelected, "row selected");
  }
}
