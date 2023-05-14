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

  getNotificationForTech(userId: string) {
    this.socket.on("send-ticket", (ticket: Ticket) => {
      if (ticket.assignedTo === userId) {
        let notification = {
          title: ticket.title,
          createdBy: ticket.createdBy,
          createdAt: ticket.createdAt,
        };
        return notification;
      }
    });
  }

  getAllTicket() {
    return gql`
      {
        getTickets {
          designiation
          emplacement
          numero
          remarque
          reparable
          pdr

          techNameSug
          typeClient
          createdAt
          updatedAt
        }
      }
    `;
  }
}
