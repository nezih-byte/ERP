import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ngx-all-info",
  templateUrl: "./all-info.component.html",
  styleUrls: ["./all-info.component.scss"],
})
export class AllInfoComponent implements OnInit {
  allData;
  constructor() {}

  ngOnInit(): void {
    console.log("all data", this.allData);
  }
}
