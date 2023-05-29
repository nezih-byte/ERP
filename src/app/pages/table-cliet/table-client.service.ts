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




       mutation {createClient(compClient:"${type}",createClientInput:{firstName:"${userData.firstName}" lastName:"${userData.lastName}" email:"${userData.email}" phone:"${userData.phone}" address:"test" companyName:"${userData.companyName}" region:"${userData.region}" codePostal:"${userData.codePostal}" tva:"${userData.tva}"
       etat:"${userData.etat}" fax:"${userData.fax}" ibanRib:"${userData.ibanRib}" nRegisterCommerce:"${userData.nRegisterCommerce}" swiftBic:"${userData.swiftBic}" nattestation:"${userData.nattestation}" codeFiscal:"${userData.codeFiscal}" conPayment:"${userData.conPayment}" website:"${userData.website}" techContact:"${userData.techContact}"}) {firstName}}
    `;
  }

  getClient() {
    return gql`
      {
        getAllClient {
          _id
          firstName
          lastName
          email
          phone
          address
          type
          companyName
          region
          codePostal
        }
      }
    `;
  }

  getCompany() {
    return gql`
      {
        getAllCompany {
          _id
          firstName
          lastName
          email
          phone
          address
          type
          companyName
          region
          codePostal
        }
      }
    `;
  }
}
