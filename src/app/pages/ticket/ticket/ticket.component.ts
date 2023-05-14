import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { LocalDataSource } from "ng2-smart-table";
import { TicketService } from "./ticket.service";

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
      techNameSug: {
        title: "pdr",
        type: "string",
      },
      typeClient: {
        title: "pdr",
        type: "string",
      },
      createdAt: {
        title: "createdAt",
        type: "string",
      },
      updatedAt: {
        title: "updatedAt",
        type: "string",
      },
    },
  };

  listOfTicket: LocalDataSource;

  constructor(private apollo: Apollo, private ticketService: TicketService) {}

  ngOnInit(): void {
    this.getAllTicket();
  }

  getAllTicket() {
    this.apollo
      .query<any>({
        query: this.ticketService.getAllTicket(),
      })
      .subscribe(({ data }) => {
        this.listOfTicket = new LocalDataSource(data.getTickets);
      });
  }
}
