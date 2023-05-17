import { Injectable } from "@angular/core";
import { gql } from "apollo-angular";
import { Socket, io } from "socket.io-client";
import { Ticket } from "../ticket";

@Injectable({
  providedIn: "root",
})
export class TicketService {
  socket: any;
  constructor() {
    this.socket = io("http://localhost:3000", {
      transports: ["websocket", "polling"],
    });
  }

  addTicket(ticket: Ticket) {
    console.log("from service", ticket);
    this.socket.emit("send-ticket", ticket);
  }

  getNotification(currentUser: string) {
    this.socket.on("ticket", (ticket: Ticket) => {
      console.log("ticket recieved", ticket);
      return ticket;
    });
  }

  getAllTicket() {
    return gql`
      {
        getTickets {
          _id
          designiation
          emplacement
          numero
          remarque
          reparable
          pdr
          techNameSug
          typeClient
          status
          createdAt
          updatedAt
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

  updateTicketByTech(updateTicket: Ticket) {
    return gql`
      mutation {
        updateTicket(
          _id: "${updateTicket._id}"
          updateTicketInput: {
            designiation: " ${updateTicket.designiation} "
            emplacement: "${updateTicket.emplacement}"
            numero: "${updateTicket.numero}"
            remarque: "${updateTicket.remarque}"
            reparable: "${updateTicket.reparable}"
            pdr: "${updateTicket.pdr}"
            diagnosticTimeByTech: "${updateTicket.lapTime}"
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
}
