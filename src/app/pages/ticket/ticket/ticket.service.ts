import { Injectable } from "@angular/core";
import { gql } from "apollo-angular";
import { Socket, io } from "socket.io-client";
import { Ticket } from "../ticket";
import { NbToastrService } from "@nebular/theme";
import { ROLE } from "../../../roles";

@Injectable({
  providedIn: "root",
})
export class TicketService {
  socket: any;
  constructor(private toastr: NbToastrService) {
    this.socket = io("http://localhost:3000", {
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

  getNotification(currentUser: string) {
    let notifcation: any;
    this.socket.on("ticket", (ticket: Ticket) => {
      if (ticket.assignedTo === currentUser) {
        console.log("ticket recieved", ticket);
        this.toastr.success(`You've got new message ${ticket}`);
        notifcation = ticket;
      }
    });
    return notifcation;
  }

  getTicketForMagasin(currentRole) {
    if (currentRole === ROLE.MAGASIN) {
      this.socket.on("magasin", (ticket: Ticket) => {
        console.log(ticket, "ticket magasin getting", currentRole, "role");
        if (ticket.role === currentRole) {
          this.toastr.success(
            `You've got new message "MAGASIN" ${ticket.designiation} from tech `
          );
        }
      });
    }
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
          remarque
          reparable
          pdr
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
          isOpenByTech
          bc
          bl
          titre
          pdfComposant
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
        return `{ nameComposant: "${el.nameComposant}", quantity: ${el.quantiteComposant} }`;
      })
      .join(", ");

    return gql`
    mutation {
      updateTicket(
        _id: "${updateTicket._id}",
        updateTicketInput: {
          designiation: "${updateTicket.designiation}",
          emplacement: "${updateTicket.emplacement}",
          numero: "${updateTicket.numero}",
          remarque: "${updateTicket.remarque}",
          reparable: "${updateTicket.reparable}",
          pdr: "${updateTicket.pdr}",
          diagnosticTimeByTech: "${updateTicket.lapTime}",
          composant: [${composantInputs}]
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

  addComposant(_idTicket: string, nameComposant: string) {
    console.log(_idTicket, nameComposant, "in service add composant");
    return gql`
      mutation {
        createComposant(
          createComposantInput: { _idTicket: "${_idTicket}", nameComposant: "${nameComposant}" }
        ) {
          nameComposant
        }
      }
    `;
  }
}
