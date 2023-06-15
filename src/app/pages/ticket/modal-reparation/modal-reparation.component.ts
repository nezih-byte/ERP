import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { NbDialogRef, NbToastrService } from "@nebular/theme";
import { Apollo } from "apollo-angular";
import { ModalTicketComponent } from "../modal-ticket/modal-ticket.component";
import { TicketService } from "../ticket/ticket.service";

@Component({
  selector: "ngx-modal-reparation",
  templateUrl: "./modal-reparation.component.html",
  styleUrls: ["./modal-reparation.component.scss"],
})
export class ModalReparationComponent implements OnInit {
  formReaparationTech = new FormGroup({
    remarqueTech: new FormControl(null),
  });
  rowData: any;
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
  isRunning: any;
  startTime: number;
  minutes: string;
  seconds: string;
  milliseconds: string;
  lapTime: string;
  laps: any[];
  constructor(
    private dialogRef: NbDialogRef<ModalReparationComponent>,
    private ticketService: TicketService,
    private apollo: Apollo,
    private toastr: NbToastrService
  ) {}

  ngOnInit(): void {
    this.startStopwatch();
  }

  updateTicketConfirm() {}

  startStopwatch() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.startTime = Date.now();
      this.updateTimer();
    } else {
      this.isRunning = false;
    }
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

  submitTechRemarque() {
    this.lap();
    console.log(
      this.formReaparationTech.value,

      "hello lap"
    );
    this.apollo
      .mutate<any>({
        mutation: this.ticketService.updateRemarqueReparation(
          this.rowData._id,
          this.formReaparationTech.value.remarqueTech,
          this.lapTime
        ),
      })
      .subscribe(({ data }) => {
        console.log(data, "updated");
      });
    this.updateStatusToFinish();
    this.dialogRef.close();
  }
  updateStatusToFinish() {
    this.apollo
      .mutate<any>({
        mutation: this.ticketService.updateStatusToFinish(this.ticketId),
      })
      .subscribe(({ data }) => {
        if (data) {
          this.toastr.success("", "Réparation terminé");
        }
      });
  }
}
