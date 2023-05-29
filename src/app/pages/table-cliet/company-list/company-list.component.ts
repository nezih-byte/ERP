import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { TableClientService } from "../table-client.service";
import { Apollo } from "apollo-angular";

@Component({
  selector: "ngx-company-list",
  templateUrl: "./company-list.component.html",
  styleUrls: ["./company-list.component.scss"],
})
export class CompanyListComponent implements OnInit {
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
      companyName: {
        title: "Société",
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
  listOfCompany: LocalDataSource;

  constructor(
    private clientService: TableClientService,
    private apollo: Apollo
  ) {}

  ngOnInit(): void {
    this.getCompany();
  }

  getCompany() {
    this.apollo
      .query<any>({
        query: this.clientService.getCompany(),
      })
      .subscribe(({ data }) => {
        console.log(data);
        this.listOfCompany = new LocalDataSource(data.getAllCompany);
      });
  }
}
