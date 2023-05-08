import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { TableClientService } from "../table-client.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "ngx-add-client",
  templateUrl: "./add-client.component.html",
  styleUrls: ["./add-client.component.scss"],
})
export class AddClientComponent implements OnInit {
  addUser = new FormGroup({
    //nameUser: new FormControl("", [Validators.required]),
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
  });

  constructor(private apollo: Apollo, private client: TableClientService) {}

  ngOnInit(): void {}

  getUserDataAdd() {
    console.log(this.addUser.value, "user data");
  }
}
