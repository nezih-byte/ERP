import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { NbDialogRef, NbTagComponent } from "@nebular/theme";
import { TicketService } from "../ticket/ticket.service";
import { Apollo } from "apollo-angular";
import * as moment from "moment";
import { ShareService } from "../../../share-data/share.service";
import { ROLE } from "../../../roles";
import { subscribe } from "graphql";

@Component({
  selector: "ngx-modal-ticket",
  templateUrl: "./modal-ticket.component.html",
  styleUrls: ["./modal-ticket.component.scss"],
})
export class ModalTicketComponent implements OnInit {
  updateTicket = new FormGroup({
    title: new FormControl("", [Validators.required]),
    designiation: new FormControl("", [Validators.required]),
    typeClient: new FormControl("", [Validators.required]),
    numSerie: new FormControl("", [Validators.required]),
    numero: new FormControl("", [Validators.required]),
    assignedTo: new FormControl("", [Validators.required]),
    reparable: new FormControl("", [Validators.required]),
    pdr: new FormControl("non", [Validators.required]),
    remarqueTech: new FormControl("", [Validators.required]),
    emplacement: new FormControl("", [Validators.required]),
    role: new FormControl("", [Validators.required]),
  });

  pdrControl: FormControl;

  ticketId: string;
  ROLE = ["ADMIN_MANAGER", "ADMIN_TECH", "MANAGER", "TECH", "MAGASIN"];
  minutes: string = "00";
  seconds: string = "00";
  milliseconds: string = "00";
  isRunning: boolean = false;
  startTime: number = 0;
  laps: string[] = [];
  lapTime: string;
  isModalOpened: any;
  listOfIssue: any;
  pdrStatus: string;
  trees: any = [];
  quantite: number;
  nomComposant: string;
  vari = "Hello";
  isReparable: any;
  rowData: any;
  title: any;
  allComposant: any;

  constructor(
    private dialogRef: NbDialogRef<ModalTicketComponent>,
    private ticketService: TicketService,
    private apollo: Apollo,
    private share: ShareService,
    private cdr: ChangeDetectorRef,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.title = this.rowData.title;

    this.updateTicketToInProgress();
    this.startStopwatch();
    this.isOpenCheck();
    this.getAllIssue();
    this.myForm = new FormGroup({
      nomComposant: new FormControl(null),
      quantite: new FormControl(null),
    });
  }
  myForm: FormGroup;

  updatePDRValue(data) {
    console.log(data, "pdr");
    console.log("type of pdr", typeof data);
    this.cdr.detectChanges();
    this.pdrStatus = data;
  }

  updateReparableValue(data) {
    this.isReparable = data;
    this.cdr.detectChanges();
  }

  ajouterComposant() {
    console.log(this.rowData, "row data in modal");
    let objectComposant: any = {
      _id: "",
      nameComposant: "",
      quantiteComposant: 0,
    };

    /**
     * Ajouter btn : for adding composant in composant entity
     * Update btn , for adding composant data in ticket
     */

    const nomComposantValue = this.myForm.get("nomComposant").value;
    const quantiteValue = this.myForm.get("quantite").value;

    objectComposant["nameComposant"] = nomComposantValue;
    objectComposant["quantiteComposant"] = +quantiteValue;
    this.trees.push(objectComposant);
    let quantity = parseInt(quantiteValue);
    console.log(this.trees, "ajout trees");

    this.apollo
      .mutate<any>({
        mutation: this.ticketService.addComposant(
          nomComposantValue,
          parseInt(quantiteValue)
        ),
      })
      .subscribe(({ data }) => {
        console.log("component created", data);
      });
  }

  dateFormat(date: string) {
    return moment(date).format("HH:mm:ss");
  }

  isOpenCheck() {
    this.apollo
      .mutate<any>({
        mutation: this.ticketService.isOpen(this.ticketId),
      })
      .subscribe(({ data }) => {
        console.log("Modal opened check", data);
      });
  }

  onTagRemove(tagToRemove: NbTagComponent): void {
    const indexToRemove = this.trees.findIndex(
      (tree) => tree.nameComposant === tagToRemove.text
    );

    if (indexToRemove !== -1) {
      this.trees.splice(indexToRemove, 1);
    }

    console.log(this.trees, "Updated trees array");
  }

  updateTicketConfirm() {
    this.lap();
    let data = this.dateFormat(this.lapTime);
    console.log(data, "date");

    let dataToUpdate = {
      _id: this.ticketId,
      designiation: this.updateTicket.value.designiation,
      emplacement: this.updateTicket.value.emplacement,
      numero: this.updateTicket.value.numero,
      remarqueTech: this.updateTicket.value.remarqueTech,
      reparable: this.updateTicket.value.reparable,
      pdr: this.updateTicket.value.pdr,
      lapTime: this.lapTime,
      role: this.updateTicket.value.role,
      composant: this.trees,
    };

    console.log(dataToUpdate, "data to update");

    this.apollo
      .mutate<any>({
        mutation: this.ticketService.updateTicketByTech(dataToUpdate),
      })
      .subscribe(({ data }) => {
        console.log(data);
        this.isModalOpened = data;
        this.ticketService.sendToMagasin(dataToUpdate);
      });
    this.updateStatusToFinish();

    this.dialogRef.close(true);
  }

  getAllComposant() {
    this.apollo
      .query<any>({
        query: this.ticketService.getAllComposant(),
      })
      .subscribe(({ data }) => {
        this.allComposant = data.getAllComposant;
      });
  }

  getAllIssue() {
    this.apollo
      .query<any>({
        query: this.ticketService.getAllIssues(),
      })
      .subscribe(({ data }) => {
        this.listOfIssue = data.getAllIssue;
      });
  }

  startStopwatch() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.startTime = Date.now();
      this.updateTimer();
    } else {
      this.isRunning = false;
    }
  }

  updateTicketToInProgress() {
    this.apollo
      .mutate<any>({
        mutation: this.ticketService.updateTicketToInProgress(this.ticketId),
      })
      .subscribe(({ data }) => {
        console.log(data, "ticket opened");
      });
  }

  updateStatusToFinish() {
    this.apollo
      .mutate<any>({
        mutation: this.ticketService.updateStatusToFinish(this.ticketId),
      })
      .subscribe(({ data }) => {
        console.log(data, "ticket opened");
      });
  }

  updateTimer() {
    if (this.isRunning) {
      const elapsedTime = Date.now() - this.startTime;
      this.minutes = this.padZero(Math.floor(elapsedTime / (1000 * 60 * 60)));
      this.seconds = this.padZero(
        Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60))
      );
      this.milliseconds = this.padZero(
        Math.floor((elapsedTime % (1000 * 60)) / 1000)
      );

      requestAnimationFrame(() => this.updateTimer());
    }
  }

  lap() {
    if (this.isRunning) {
      this.lapTime = ` ${this.minutes}:${this.seconds}:${this.milliseconds}`;
      console.log(this.lapTime, "laptime");
    }
  }

  reset() {
    this.minutes = "00";
    this.seconds = "00";
    this.milliseconds = "00";
    this.isRunning = false;
    this.startTime = 0;
    this.laps = [];
  }

  padZero(value: number): string {
    return value.toString().padStart(2, "0");
  }
}
