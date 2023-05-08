import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { NbToastrService } from "@nebular/theme";
import { Apollo } from "apollo-angular";
import { ProfileService } from "../profile/profile.service";

@Injectable({
  providedIn: "root",
})
export class GuardAuth implements CanActivate {
  constructor(
    private apollo: Apollo,
    private userService: ProfileService,
    private router: Router,
    private toastr: NbToastrService
  ) {}

  isAuth() {
    const token = localStorage.getItem("token");
    return token;
  }

  async getUser() {
    let user = this.apollo
      .query<any>({
        query: this.userService.getUserByToken(),
      })
      .toPromise();
    // console.log("This is user from graphql in guard", user);
    return user;
  }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let user = await this.getUser();

    if (this.isAuth()) {
      if (
        route.data.role &&
        route.data.role.includes(user.data.getTokenData.role)
      ) {
        return true;
      }
      this.router.navigate(["/auth"]);

      return false;
    }
    localStorage.removeItem("token");
    this.router.navigate(["/auth"]);

    return false;
  }
}
