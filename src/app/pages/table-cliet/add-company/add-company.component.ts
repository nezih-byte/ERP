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
  addCompany = new FormGroup({
    companyName: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    region: new FormControl("", [Validators.required, Validators.email]),
    codePostal: new FormControl("", [Validators.required, Validators.email]),
    tva: new FormControl("", [Validators.required, Validators.email]),
    localOrshore: new FormControl("", [Validators.required, Validators.email]),
    etat: new FormControl("", [Validators.required, Validators.email]),
    fax: new FormControl("", [Validators.required, Validators.email]),
    website: new FormControl("", [Validators.required, Validators.email]),
    conPayment: new FormControl("", [Validators.required, Validators.email]),
    techContact: new FormControl("", [Validators.required, Validators.email]),
    codeFiscal: new FormControl("", [Validators.required, Validators.email]),
    nattestation: new FormControl("", [Validators.required, Validators.email]),
    swiftBic: new FormControl("", [Validators.required, Validators.email]),
    ibanRib: new FormControl("", [Validators.required, Validators.email]),
    nRegisterCommerce: new FormControl("", [
      Validators.required,
      Validators.email,
    ]),
  });
  typeUser: string;
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
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.typeUser = this.route.snapshot.params.type;
    console.log(this.typeUser, "data");
  }

  createCompany() {
    console.log(this.addCompany.value, "form data company");
    this.apollo
      .mutate<any>({
        mutation: this.clientService.addClient(
          this.addCompany.value,
          this.typeUser
        ),
      })
      .subscribe(({ data }) => {
        console.log(data);
      });
  }
}
