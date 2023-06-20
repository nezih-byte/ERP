import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { LocalDataSource } from "ng2-smart-table";
import { TicketService } from "../ticket/ticket.service";
import { BtnOpenTicketModalComponent } from "../btn-open-ticket-modal/btn-open-ticket-modal.component";
import { DatePipe } from "@angular/common";
import { BtnReparationComponent } from "../btn-reparation/btn-reparation.component";
import { NbDialogService } from "@nebular/theme";
import { ModalAddIssueComponent } from "../modal-add-issue/modal-add-issue.component";
import { AddLocationComponent } from "../add-location/add-location.component";
import { BtnOpenModalMagasinComponent } from "../btn-open-modal-magasin/btn-open-modal-magasin.component";
import { ROLE } from "../../../roles";
import { BtnAdminsComponent } from "../btn-admins/btn-admins.component";
import { BtnFinalComponent } from "../btn-final/btn-final.component";
import { ToggleIgnoreComponent } from "../toggle-ignore/toggle-ignore.component";
import { AllInfoComponent } from "../all-info/all-info.component";

@Component({
  selector: "ngx-ticket",
  templateUrl: "./list-ticket-finie.component.html",
  styleUrls: ["./list-ticket-finie.component.scss"],
})
export class TicketComponentTraiter implements OnInit {
  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
      custom: [
        {
          name: "seeData",
          title: `<i class="nb-compose" title="Voir toutes les informations"></i>`,
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
      typeClient: {
        title: "Type",
        type: "string",
      },

      emplacement: {
        title: "emplacement",
        type: "string",
      },

      reparable: {
        title: "reparable",
        type: "string",
      },
      finalStatusTicket: {
        title: "Status",
        type: "string",
        valuePrepareFunction: (val) => {
          if (val === "IGNORED") {
            return "Annulée";
          }
          if (val === "FINISHED") {
            return "Terminée";
          }
          if (val === "IN_PROGRESS") {
            return "En cours";
          }
          if (val === "RETURN") {
            return "Retour";
          }
        },
      },
      composants: {
        title: "Date Arrivage",
        type: "string",
        valuePrepareFunction: (val) => {
          console.log(val, "val");
          return val.map((el) => {
            console.log(el, "el");
            return el.comingDate;
          });
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
      openModalAffectation: {
        title: "Diagnostique",
        type: "custom",
        renderComponent: BtnFinalComponent,
      },
      toggleIgnored: {
        title: "Retour",
        type: "custom",
        renderComponent: ToggleIgnoreComponent,
      },
    },
  };

  listOfTicket: LocalDataSource;
  listOfTech: any;
  loggedInUser: string;

  constructor(
    private apollo: Apollo,
    private ticketService: TicketService,
    private datePipe: DatePipe,
    private nbDialog: NbDialogService
  ) {}

  ngOnInit(): void {
    this.getTicketForTechAdmin();
  }

  getTicketForTechAdmin() {
    this.apollo
      .query<any>({
        query: this.ticketService.getTicketFinished(),
      })
      .subscribe(({ data }) => {
        console.log(data, "tickets");
        this.listOfTicket = new LocalDataSource(data.getFinishedTicket);
      });
  }

  seeData(seeData) {
    let modal = this.nbDialog.open(AllInfoComponent);
    modal.componentRef.instance.allData = seeData.data;
    console.log("this is where my data come",seeData)
  }
  
}
