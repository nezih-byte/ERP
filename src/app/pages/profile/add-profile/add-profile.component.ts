import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ProfileService } from "../profile.service";
import { Apollo } from "apollo-angular";

@Component({
  selector: "ngx-add-profile",
  templateUrl: "./add-profile.component.html",
  styleUrls: ["./add-profile.component.scss"],
})
export class AddProfileComponent implements OnInit {
  addProfile = new FormGroup({
    username: new FormControl("", [Validators.required]),
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required]),
    role: new FormControl("", [Validators.required]),
  });

  roles = ["ADMIN_MANAGER", "ADMIN_TECH", "MANAGER", "MAGASIN", "TECH"];

  constructor(private profileService: ProfileService, private apollo: Apollo) {}

  ngOnInit(): void {}

  saveProfile() {
    console.log(this.addProfile.value, "form");
    this.apollo
      .mutate<any>({
        mutation: this.profileService.addProfile(this.addProfile.value),
      })
      .subscribe(({ data }) => {
        console.log(data, "profile added");
      });
  }
}
