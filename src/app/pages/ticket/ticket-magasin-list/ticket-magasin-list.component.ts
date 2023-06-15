import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { TicketService } from "../ticket/ticket.service";
import { Apollo } from "apollo-angular";
import { NbToastrService } from "@nebular/theme";

@Component({
  selector: "ngx-ticket-magasin-list",
  templateUrl: "./ticket-magasin-list.component.html",
  styleUrls: ["./ticket-magasin-list.component.scss"],
})
export class TicketMagasinListComponent implements OnInit {
  dataTicketSelected;
  composant = [];
  magasinField = new FormGroup({
    etat: new FormControl(null, [Validators.required]),
    purchasePrice: new FormControl(null, [Validators.required]),
    sellPrice: new FormControl(null, [Validators.required]),
    datePicker: new FormControl(null, [Validators.required]),
  });
  optionMagasin = ["Interne", "Internet interne", "Externe"];
  constructor(
    private apollo: Apollo,
    private ticketService: TicketService,
    private toastr: NbToastrService
  ) {}

  ngOnInit(): void {
    console.log(this.dataTicketSelected, "row selected");
    this.getListOfComposant();
  }
  /**
   *
   * @param _id ticket
   * @param nameComposant in array og composant existed in ticket
   * @param sellPrice feeds
   * @param purchasePrice feeds
   *
   */

  updateMagasin(nameComposant: string) {
    console.log(nameComposant, "name composant");
    this.apollo
      .mutate<any>({
        mutation: this.ticketService.updateMagasin(
          this.dataTicketSelected._id,
          nameComposant,
          this.magasinField.value.sellPrice,
          this.magasinField.value.purchasePrice,
          this.magasinField.value.etat,
          this.magasinField.value.datePicker
        ),
      })
      .subscribe(({ data }) => {
        console.log(data, "updated");
        console.log(this.composant, "compsant");
        if (data) {
          const updatedComposants = this.composant.findIndex(
            (composant) => composant.nameComposant !== nameComposant
          );
          this.composant.splice(updatedComposants - 1, 1);

          console.log(updatedComposants, "index");
          this.toastr.success("", "Composant affecté");
          this.magasinField.reset();
        }
      });
  }

  getListOfComposant() {
    this.composant = this.dataTicketSelected.composants;
    console.log(this.composant, "List of composant");
    this.composant.reverse();
  }
}
