import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { TicketService } from "../ticket/ticket.service";
import { Apollo } from "apollo-angular";
import { log } from "console";
import { TableClientService } from "../../table-cliet/table-client.service";
import { LocalDataSource } from "ng2-smart-table";

@Component({
  selector: "ngx-add-ticket",
  templateUrl: "./add-ticket.component.html",
  styleUrls: ["./add-ticket.component.scss"],
})
export class AddTicketComponent implements OnInit {
  addTicket = new FormGroup({
    designiation: new FormControl("", []),
    typeClient: new FormControl("", []),
    numSerie: new FormControl("", []),
    emplacement: new FormControl("", []),
    numero: new FormControl("", []),
    assignedTo: new FormControl("", []),
    affectedToCompany: new FormControl("", []),
    affectedToClient: new FormControl("", []),
    remarque: new FormControl("", []),
    title: new FormControl("", []),
  });

  emplacement;

  tec = [
    { local: "Tech 1" },
    { local: "Tech 2" },
    { local: "Tech 3" },
    { local: "Tech 4" },
    { local: "Tech 5" },
    { local: "Tech 6" },
  ];

  options = [
    { value: "This is value 1", label: "Oui" },
    { value: "This is value 2", label: "Non" },
  ];
  options1 = [
    { value: "This is value 1", label: "Oui" },
    { value: "This is value 2", label: "Non" },
  ];
  optionsType = [
    { value: "Societe", label: "Societe" },
    { value: "Client", label: "Client" },
  ];
  listOfTech: any;
  listOfClient;
  listOfCompany;
  checkedTypeClient: any;
  constructor(
    private ticketService: TicketService,
    private clientService: TableClientService,
    private apollo: Apollo,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getAllTech();
    this.getLocation();
    this.getClientList();
  }

  sendTicket() {
    this.addTicket.value.createdBy = localStorage.getItem("username");
    this.ticketService.addTicket(this.addTicket.value);
  }

  getSelectedTypeClient(data) {
    this.checkedTypeClient = data;
  }

  getAllTech() {
    this.apollo
      .query<any>({
        query: this.ticketService.getAllTech(),
      })
      .subscribe(({ data }) => {
        console.log(data);
        this.listOfTech = data.getAllTech;
      });
  }

  getLocation() {
    this.apollo
      .query<any>({
        query: this.ticketService.getLocation(),
      })
      .subscribe(({ data }) => {
        console.log(data, "location");
        this.emplacement = data.getAllLocations;
      });
  }

  getClientList() {
    this.apollo
      .query<any>({
        query: this.clientService.getClient(),
      })
      .subscribe(({ data }) => {
        console.log(data, "client");
        this.listOfClient = data.getAllClient;
      });

    this.apollo
      .query<any>({
        query: this.clientService.getCompany(),
      })
      .subscribe(({ data }) => {
        console.log(data, "company");
        this.listOfCompany = data.getAllCompany;
      });
  }
  // selectedFile: File | null = null;

  // onFileSelected(event: any) {
  //   this.selectedFile = event.target.files[0];
  // }

  // saveSelectedFile() {
  //   if (this.selectedFile) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       const fileArrayBuffer = reader.result as ArrayBuffer;
  //       const fileBlob = new Blob([fileArrayBuffer], {
  //         type: this.selectedFile.type,
  //       });
  //       console.log("reader", reader);
  //       console.log("fileArrayBuffer", fileArrayBuffer);
  //       console.log(typeof fileArrayBuffer, "type de cette variable");
  //       console.log("fileBlob===> ", fileBlob);
  //     };
  //     const BlobPDF = reader.readAsArrayBuffer(this.selectedFile);
  //     console.log("BlobPDF===> ", BlobPDF);
  //   }

  // }
}
