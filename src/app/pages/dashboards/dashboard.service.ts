import { Injectable } from "@angular/core";
import { gql } from "apollo-angular";

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  constructor() {}

  getClientCompanyChart() {
    return gql`
      {
        getClientCompanyChart {
          name
          value
        }
      }
    `;
  }
}
