import { Injectable } from "@angular/core";
import { gql } from "apollo-angular";
import { Client } from "./client.interface";

@Injectable({
  providedIn: "root",
})
export class TableClientService {
  constructor() {}

  addClient(userData: Client, type: string) {
    return gql`
      mutation {
        createClient(
          compClient: "${type}"
          createClientInput: {
            firstName: "${userData.firstName}"
            lastName: "${userData.lastName}"
            email: "${userData.email}"
            phone: "${userData.phone}"
            address: "${userData.address}"
          }
        ) {
          firstName
        }
      }
    `;
  }
}
