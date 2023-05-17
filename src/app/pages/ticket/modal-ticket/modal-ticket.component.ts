import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NbDialogRef } from "@nebular/theme";
import { TicketService } from "../ticket/ticket.service";
import { Apollo } from "apollo-angular";
import * as moment from "moment";

@Component({
  selector: "ngx-modal-ticket",
  templateUrl: "./modal-ticket.component.html",
  styleUrls: ["./modal-ticket.component.scss"],
})
export class ModalTicketComponent implements OnInit {
  @Input() rowData: any;
  updateTicket = new FormGroup({
    designiation: new FormControl("", [Validators.required]),
    typeClient: new FormControl("", [Validators.required]),
    numSerie: new FormControl("", [Validators.required]),
    numero: new FormControl("", [Validators.required]),
    assignedTo: new FormControl("", [Validators.required]),
    reparable: new FormControl("", [Validators.required]),
    pdr: new FormControl("", [Validators.required]),
    remarque: new FormControl("", [Validators.required]),
    emplacement: new FormControl("", [Validators.required]),
  });

  ticketId: string;

  minutes: string = "00";
  seconds: string = "00";
  milliseconds: string = "00";
  isRunning: boolean = false;
  startTime: number = 0;
  laps: string[] = [];
  lapTime: string;
  constructor(
    private dialogRef: NbDialogRef<ModalTicketComponent>,
    private ticketService: TicketService,
    private apollo: Apollo
  ) {}

  ngOnInit(): void {
    this.updateTicketToInProgress();
    this.startStopwatch();
    console.log(this.rowData, "row data from button");
  }

  dateFormat(date: string) {
    return moment(date).format("HH:mm:ss");
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
      remarque: this.updateTicket.value.remarque,
      reparable: this.updateTicket.value.reparable,
      pdr: this.updateTicket.value.pdr,
      lapTime: this.lapTime,
    };

    this.apollo
      .mutate<any>({
        mutation: this.ticketService.updateTicketByTech(dataToUpdate),
      })
      .subscribe(({ data }) => {
        console.log(data);
      });
    this.updateStatusToFinish();

    this.dialogRef.close();
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
