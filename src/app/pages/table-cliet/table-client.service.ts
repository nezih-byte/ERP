import { Injectable } from "@angular/core";
import { gql } from "apollo-angular";

@Injectable({
  providedIn: "root",
})
export class TableClientService {
  constructor() {}

  addClient() {
    return gql``;
  }
}
