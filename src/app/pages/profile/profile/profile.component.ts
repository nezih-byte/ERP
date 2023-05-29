import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { LocalDataSource } from "ng2-smart-table";
import { ProfileService } from "../profile.service";

@Component({
  selector: "ngx-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
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
      username: {
        title: "Société",
        type: "string",
      },

      firstName: {
        title: "Lastname",
        type: "string",
      },
      lastName: {
        title: "Address",
        type: "string",
      },
      role: {
        title: "Phone",
        type: "string",
      },
      email: {
        title: "Phone",
        type: "string",
      },

      createdAt: {
        title: "Type",
        type: "string",
      },

      updatedAt: {
        title: "Type",
        type: "string",
      },
    },
  };

  profileList: LocalDataSource;

  constructor(private profileService: ProfileService, private apollo: Apollo) {}

  ngOnInit(): void {
    this.listOfProfile();
  }

  listOfProfile() {
    this.apollo
      .query<any>({
        query: this.profileService.getListProfile(),
      })
      .subscribe(({ data }) => {
        console.log(data, "data");

        this.profileList = new LocalDataSource(data.getAllProfiles);
      });
  }
}
