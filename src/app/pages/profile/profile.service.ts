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
    return gql`
      mutation {
        login(loginAuthInput: { username: "${username}", password: "${password}" }) {
          access_token
          user{ role  username email }
        }
      }
    `;
  }
}
