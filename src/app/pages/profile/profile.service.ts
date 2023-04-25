import { Injectable } from "@angular/core";
import { gql } from "apollo-angular";

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  constructor() {}

  getUserByToken() {
    return gql`
      {
        getTokenData {
          role
          username
          email
        }
      }
    `;
  }

  signIn(username: string, password: string) {
    console.log("in service");
    console.log(typeof username);
    console.log(typeof password);
    return gql`
      mutation {
        login(loginAuthInput: { username: "${username}", password: "${password}" }) {
          access_token
        }
      }
    `;
  }
}
