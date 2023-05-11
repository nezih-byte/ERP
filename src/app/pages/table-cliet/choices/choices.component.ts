import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ngx-choices",
  templateUrl: "./choices.component.html",
  styleUrls: ["./choices.component.scss"],
})
export class ChoicesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onCreateNewClient() {
    console.log("Client work");
  }
  onCreateNewSociete() {
    console.log("Societe work");
  }
}
