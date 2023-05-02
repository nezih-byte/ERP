import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ngx-add-client",
  templateUrl: "./add-client.component.html",
  styleUrls: ["./add-client.component.scss"],
})
export class AddClientComponent implements OnInit {
  firstForm;
  secondForm;
  options = [
    { value: "This is value 1", label: "Option 1" },
    { value: "This is value 2", label: "Option 2" },
  ];
  constructor() {}

  ngOnInit(): void {}
}
