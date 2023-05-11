import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Apollo } from "apollo-angular";
import { TableClientService } from "../table-client.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "ngx-add-company",
  templateUrl: "./add-company.component.html",
  styleUrls: ["./add-company.component.scss"],
})
export class AddCompanyComponent implements OnInit {
  addUser = new FormGroup({
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
  });
  typeUser: string;
  constructor(
    private apollo: Apollo,
    private clientService: TableClientService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.typeUser = this.route.snapshot.params.type;
    console.log(this.typeUser, "data");
  }

  createUser() {
    this.apollo
      .mutate<any>({
        mutation: this.clientService.addClient(
          this.addUser.value,
          this.typeUser
        ),
      })
      .subscribe(({ data }) => {
        console.log(data);
      });
  }
}
