import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { TableClientService } from "../table-client.service";
import { LocalDataSource } from "ng2-smart-table";

@Component({
  selector: "ngx-table-client",
  templateUrl: "./table-client.component.html",
  styleUrls: ["./table-client.component.scss"],
})
export class TableClientComponent implements OnInit {
  listOfClient: LocalDataSource;
  constructor(
    private apollo: Apollo,
    private clientService: TableClientService
  ) {}

  ngOnInit(): void {
    this.getClientCompany();
  }

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
      firstName: {
        title: "ID",
        type: "string",
      },

      lastName: {
        title: "Fistname",
        type: "string",
      },
      email: {
        title: "Lastname",
        type: "string",
      },
      address: {
        title: "Address",
        type: "string",
      },
      phone: {
        title: "Phone",
        type: "string",
      },

      type: {
        title: "Type",
        type: "string",
      },
    },
  };

  // onDeleteConfirm(event) {
  //   console.log("Delete Event In Console");
  //   console.log(event);
  //   if (window.confirm("Are you sure you want to delete?")) {
  //     event.confirm.resolve();
  //   } else {
  //     event.confirm.reject();
  //   }
  // }

  // onCreateConfirm(event) {
  //   console.log("Create Event In Console");
  //   console.log(event);
  // }

  // onSaveConfirm(event) {
  //   console.log("Edit Event In Console");
  //   console.log(event);
  // }

  getClientCompany() {
    this.apollo
      .query<any>({
        query: this.clientService.getClientCompany(),
      })
      .subscribe(({ data }) => {
        console.log(data);
        this.listOfClient = new LocalDataSource(data.getAllClientCompany);
      });
  }
}
