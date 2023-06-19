import { Injectable } from "@angular/core";
import { gql } from "apollo-angular";
import { Socket, io } from "socket.io-client";
import { Ticket } from "../ticket";
import { NbToastrService } from "@nebular/theme";
import { ROLE } from "../../../roles";
import { URL } from "../../../URLs";
import { id } from "@swimlane/ngx-charts";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TicketService {
  socket: any;
  constructor(private toastr: NbToastrService) {
    this.socket = io(URL.SOCKET, {
      transports: ["websocket", "polling"],
    });
  }

  /**
   *
   * @param ticket
   *
   *  SOCKET SECTION
   *
   *
   */
  addTicket(ticket: Ticket) {
    console.log("from service", ticket);
    this.socket.emit("send-ticket", ticket);
  }

  sendToMagasin(ticket: Ticket) {
    console.log(ticket, "ticket magasin sending");
    this.socket.emit("send-data-magasin", ticket);
  }

  getNotification(): Observable<any> {
    return new Observable((observer) => {
      this.socket.on("ticket", (ticket: Ticket) => {
        observer.next(ticket);
      });
    });
  }

  getTicketForMagasin(): Observable<any> {
    return new Observable((observer) => {
      this.socket.on("magasin", (ticket: Ticket) => {
        observer.next(ticket);
      });
    });
  }

  getAllTicket() {
    return gql`
      {
        getTicketByTech {
          _id
          title
          designiation
          emplacement
          numero
          remarqueTech
          remarqueManager
          reparable
          pdr
          techNameSug
          isReparable
          typeClient
          createdBy
          assignedTo
          affectedToCompany
          affectedToClient
          createdAt
          updatedAt
          status
          magasinDone
          diagnosticTimeByTech
          priority
          Devis
          facture
          bc
          bl
          titre
          isOpenByTech
          pdfComposant
          composants {
            nameComposant
            quantity
            purchasePrice
            sellPrice
            statusComposant
            comingDate
            isAffected
          }
        }
      }
    `;
  }

  getAllTech() {
    return gql`
      {
        getAllTech {
          username
        }
      }
    `;
  }

  updateTicketByTech(updateTicket) {
    const composantInputs = updateTicket.composant
      .map((el) => {
        return `{nameComposant: "${el.nameComposant}", quantity: ${el.quantiteComposant} }`;
      })
      .join(", ");

    console.log(composantInputs, "from service composant");

    return gql`
    mutation {
      updateTicket(
        _id: "${updateTicket._id}",
        updateTicketInput: {
          designiation: "${updateTicket.designiation}",
          emplacement: "${updateTicket.emplacement}",
          numero: "${updateTicket.numero}",
          remarqueTech: "${updateTicket.remarqueTech}",
          reparable: "${updateTicket.reparable}",
          pdr: "${updateTicket.pdr}",
          diagnosticTimeByTech: "${updateTicket.lapTime}",
          composants: [${composantInputs}]
       
        }
      )
    }
  `;
  }
  updateTicketToInProgress(_id: string) {
    return gql`
      mutation {
        updateStatusToInProgress(_id:"${_id}")
      }
    `;
  }
  updateStatusToFinish(_id: string) {
    return gql`
      mutation {
        updateStatusToFinish(_id:"${_id}")
      }
    `;
  }

  isOpen(_id: string) {
    return gql`
      mutation {
        isOpen(_id: "${_id}")
      }
    `;
  }

  changeStatusSelected(_id: string, status: string) {
    return gql`
      mutation {
        changeStatus(_id: "${_id}", status: "${status}")
      }
    `;
  }

  addIssue(nameIssue: string) {
    return gql`
      mutation {
        createIssue(createIssueInput: { issueName: "${nameIssue}" }) {
          _id
        }
      }
    `;
  }

  getLocation() {
    return gql`
      {
        getAllLocations {
          _id
          locationName
        }
      }
    `;
  }

  getAllIssues() {
    return gql`
      {
        getAllIssue {
          _id
          issueName
        }
      }
    `;
  }

  addLocation(locationName: string) {
    return gql`
      mutation{createLocation(createLocationInput:{locationName:"${locationName}"}) {_id}}
    `;
  }

  addComposant(nameComposant: string, quantity: number) {
    console.log(nameComposant, "in service add composant");
    return gql`
      mutation {
        createComposant(
          createComposantInput: {  nameComposant: "${nameComposant}" , qunatity:${quantity}}
        ) {
          nameComposant
        }
      }
    `;
  }

  getAllComposant() {
    return gql`
      {
        getAllComposant {
          _id
          nameComposant
        }
      }
    `;
  }

  updateMagasin(
    _id: string,
    nameComposant: string,
    sellPrice: string,
    purchasePrice: string,
    statusComposant: string,
    comingDate: string
  ) {
    return gql`
      mutation {
        magasinUpdate(
          magasinUpdateData: {
            _id: "${_id}"
            nameComposant: "${nameComposant}"
            sellPrice: "${sellPrice}"
            purchasePrice: "${purchasePrice}"
            statusComposant: "${statusComposant}"
            comingDate: "${comingDate}"
          }
        )
      }
    `;
  }

  getListForAdmins() {
    return gql`
      {
        getTicketMagasinFinie {
          _id
          title
          designiation
          emplacement
          numero
          remarqueTech
          reparable
          pdr
          finalPrice
          techNameSug
          typeClient
          createdBy
          createdAt
          updatedAt
          status
          diagnosticTimeByTech
          priority
          Devis
          facture
          bc
          bl
          titre
          pdfComposant
          composants {
            nameComposant
            quantity
            purchasePrice
            sellPrice
            statusComposant
            comingDate
          }
        }
      }
    `;
  }

  affectationFinalPrice(_id: string, finalPrice: string) {
    return gql`
      mutation {
        affectationFinalPrice(_id: "${_id}", finalPrice: "${finalPrice}")
      }
    `;
  }

  updateTicketManager(
    _id: string,
    remise: string,
    statusFinal: boolean,
    bc: any,
    bl: any,
    facture: any,
    devis: any
  ) {
    return gql`
      mutation {
        updateTicketManager(
          updateTicketManager: {
            _id:"${_id}"
            remise:"${remise}"
            statusFinal:"${statusFinal}"
            bc:"${bc}"
            bl:"${bl}"
            facture:"${facture}"
            Devis:"${devis}"
          }
        )
      }
    `;
  }

  getTicketFinished() {
    return gql`
      {
        getFinishedTicket {
          _id
          title
          designiation
          emplacement
          numero
          remarqueTech
          reparable
          pdr
          finalPrice
          techNameSug
          typeClient
          createdBy
          createdAt
          updatedAt
          status
          finalStatusTicket
          diagnosticTimeByTech
          priority
          Devis
          IsFinishedAdmins
          facture
          bc
          bl
          titre
          pdfComposant
          composants {
            nameComposant
            quantity
            purchasePrice
            sellPrice
            statusComposant
            comingDate
          }
        }
      }
    `;
  }

  reopenDiag(_id: string) {
    return gql`
      mutation {
        reopenDiagnostique(_id: "${_id}")
      }
    `;
  }

  updateRemarqueReparation(
    _id: string,
    remarqueTech: string,
    reparationTimeByTech: string
  ) {
    return gql`
      mutation {
        updateRemarqueTechReparation(_id: "${_id}", remarqueTech: "${remarqueTech}" , reparationTimeByTech: "${reparationTimeByTech}")
      }
    `;
  }

  isReturnTicket(_id: string, status: boolean) {
    console.log(_id, status, "in service return");
    return gql`
      mutation {
        isReturnTicket(_id: "${_id}", stauts: ${status})
      }
    `;
  }

  toAdminTech(_id: string) {
    return gql`
      mutation {
        toAdminTech(_id: "${_id}")
      }
    `;
  }
}
