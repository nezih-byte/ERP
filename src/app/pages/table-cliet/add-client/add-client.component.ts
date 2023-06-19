import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { TableClientService } from "../table-client.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { NbToastrService } from "@nebular/theme";

@Component({
  selector: "ngx-add-client",
  templateUrl: "./add-client.component.html",
  styleUrls: ["./add-client.component.scss"],
})
export class AddClientComponent implements OnInit {
  addUser = new FormGroup({
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    region: new FormControl("", [Validators.required, Validators.email]),
    codePostal: new FormControl("", [Validators.required, Validators.email]),
  });
  typeUser: any;

  regions = [
    "Ariana",
    "Béja",
    "Ben Arous",
    "Bizerte",
    "Gabès",
    "Gafsa",
    "Jendouba",
    "Kairaouan",
    "Kasserine",
    "Kebili",
    "Kef",
    "Mahdia",
    "Manouba",
    "Mednine",
    "Monastir",
    "Nabeul",
    "Sfax",
    "Sidi Bouzid",
    "Siliana",
    "Sousse",
    "Tataouine",
    "Tozeur",
    "Tunis",
    "Zaghouan",
  ];

  constructor(
    private apollo: Apollo,
    private clientService: TableClientService,
    private route: ActivatedRoute,
    private toastr: NbToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.typeUser = this.route.snapshot.params.type;
    console.log(this.typeUser, "data");
  }

  createUser() {
    console.log(this.addUser.value, "data");
    this.apollo
      .mutate<any>({
        mutation: this.clientService.addClient(
          this.addUser.value,
          this.typeUser
        ),
      })
      .subscribe(({ data }) => {
        if (data) {
          this.addUser.reset();
          this.toastr.success("", "Vous avez ajouter nouveau client");
          this.router.navigate(["pages/tableClient/table-user"]);
        }
      });
  }
}
