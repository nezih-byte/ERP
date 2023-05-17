import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { LocalDataSource } from "ng2-smart-table";
import { TicketService } from "./ticket.service";
import { ModalTicketComponent } from "../modal-ticket/modal-ticket.component";
import { BtnOpenTicketModalComponent } from "../btn-open-ticket-modal/btn-open-ticket-modal.component";
import * as moment from "moment";
import { DatePipe } from "@angular/common";
@Component({
  selector: "ngx-ticket",
  templateUrl: "./ticket.component.html",
  styleUrls: ["./ticket.component.scss"],
})
export class TicketComponent implements OnInit {
  firstForm;
  secondForm;
  options = [
    { value: "This is value 1", label: "Option 1" },
    { value: "This is value 2", label: "Option 2" },
  ];

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
      custom: [
        {
          name: "passValue",
          title: `<i class="nb-compose" title="Affecte des TPEs"></i>`,
        },
      ],
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"  title="Modifier" ></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"  title="Desactiver"></i>',
      confirmDelete: true,
    },
    columns: {
      _id: {
        title: "ID",
        type: "string",
      },
      designiation: {
        title: "designiation",
        type: "string",
      },

      emplacement: {
        title: "emplacement",
        type: "string",
      },
      numero: {
        title: "numero",
        type: "string",
      },
      remarque: {
        title: "remarque",
        type: "string",
      },
      reparable: {
        title: "reparable",
        type: "string",
      },

      pdr: {
        title: "pdr",
        type: "string",
      },

      status: {
        title: "status",
        type: "html",
        valuePrepareFunction: (cell) => {
          console.log(cell);
          if (cell === "PENDING") {
            return '<div class="pending">' + cell + "</div>";
          }
          if (cell === "IN_PROGRESS") {
            return '<div class="enCours">' + cell + "</div>";
          }
          if (cell === "FINISHED") {
            return '<div class="finished">' + cell + "</div>";
          }
        },
      },

      createdAt: {
        title: "createdAt",
        type: "string",
        valuePrepareFunction: (date) => {
          var raw = new Date(date);

          var formatted = this.datePipe.transform(raw, "dd MMM yyyy hh:mm:ss");
          return formatted;
        },
      },
      updatedAt: {
        title: "updatedAt",
        type: "string",
        valuePrepareFunction: (date) => {
          var raw = new Date(date);

          var formatted = this.datePipe.transform(raw, "dd MMM yyyy hh:mm:ss");
          return formatted;
        },
      },
      configTicket: {
        title: "Configuration",
        type: "custom",
        renderComponent: BtnOpenTicketModalComponent,
      },
    },
  };

  listOfTicket: LocalDataSource;
  listOfTech: any;

  constructor(
    private apollo: Apollo,
    private ticketService: TicketService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.getAllTicket();
    this.getNotificationSocket();
  }

  getAllTicket() {
    this.apollo
      .query<any>({
        query: this.ticketService.getAllTicket(),
      })
      .subscribe(({ data }) => {
        console.log(data, "tickets");
        this.listOfTicket = new LocalDataSource(data.getTickets);
      });
  }
  getNotificationSocket() {
    const currentUser = localStorage.getItem("username");
    let notificationData = this.ticketService.getNotification(currentUser);
    console.log(notificationData, "in component");
  }
}
