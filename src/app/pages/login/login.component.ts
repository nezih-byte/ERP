import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Apollo } from "apollo-angular";
import { ProfileService } from "../profile/profile.service";

@Component({
  selector: "ngx-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
    ]),
    password: new FormControl("", [Validators.required]),
  });

  constructor(private apollo: Apollo, private profileService: ProfileService) {}

  ngOnInit(): void {}

  login() {
    console.log(
      this.loginForm.value.username,
      this.loginForm.value.password,
      "login data"
    );
    this.apollo
      .mutate<any>({
        mutation: this.profileService.signIn(
          this.loginForm.value.username,
          this.loginForm.value.password
        ),
        errorPolicy: "all",
      })
      .subscribe(({ data, errors, loading }) => {
        if (data) {
          console.log(data);
        }
        if (errors) {
          console.log(errors);
        }
        if (loading) {
          console.log(loading);
        }
      });
  }
}
