import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "ngx-ticket-magasin-list",
  templateUrl: "./ticket-magasin-list.component.html",
  styleUrls: ["./ticket-magasin-list.component.scss"],
})
export class TicketMagasinListComponent implements OnInit {
  dataTicketSelected;
  composant = [
    { _id: 0, name: "Résistance", value: 10 },
    { _id: 1, name: "Résistance", value: 10 },
    { _id: 2, name: "Résistance", value: 10 },
    { _id: 3, name: "Résistance", value: 10 },
    { _id: 4, name: "Résistance", value: 10 },
    { _id: 5, name: "Résistance", value: 10 },
    { _id: 6, name: "Résistance", value: 10 },
  ];
  magasinField = new FormGroup({
    etat: new FormControl(null, [Validators.required]),
  });
  optionMagasin = ["Interne", "Internet interne", "Externe"];
  constructor() {}

  ngOnInit(): void {
    console.log(this.dataTicketSelected, "row selected");
  }

  updateMagasin(_id) {
    console.log(_id, "hello _id");
  }
}
