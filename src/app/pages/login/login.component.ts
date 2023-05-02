import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Apollo } from "apollo-angular";
import { ProfileService } from "../profile/profile.service";
import { NbToastrService } from "@nebular/theme";
import { Router } from "@angular/router";

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

  constructor(
    private apollo: Apollo,
    private profileService: ProfileService,
    private toastr: NbToastrService,
    private router: Router
  ) {}

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
      })
      .subscribe(({ data, errors, loading }) => {
        if (data) {
          console.log(data);
          this.toastr.success(
            `Bienvenue ${data.login.user.nameUser}`,
            "login success"
          );
          this.router.navigate(["/pages/dashboardGlobal/dashboardGlobal"]);
          console.log("Im data", data);
          localStorage.setItem("token", data.login.access_token);

          localStorage.setItem("email", data.login.user.email);
          localStorage.setItem("role", data.login.user.role);
          localStorage.setItem("username", data.login.user.username);
        }
        if (errors) {
          console.log("Im error", errors);
          const errorMessage = errors[0].message;
          const titleError = errors[0].extensions.code;
          const responseError = errors[0].extensions.exception; // Todo
          console.log(errorMessage, titleError);
          this.toastr.danger(errorMessage, titleError);
        }
        if (loading) {
          console.log(loading);
        }
      });
  }
}
