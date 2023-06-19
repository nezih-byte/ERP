import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Apollo } from "apollo-angular";
import { TicketService } from "../ticket/ticket.service";
import { NbDialogRef, NbToastrService } from "@nebular/theme";

@Component({
  selector: "ngx-modal-final",
  templateUrl: "./modal-final.component.html",
  styleUrls: ["./modal-final.component.scss"],
})
export class ModalFinalComponent implements OnInit {
  rowData;

  managerForm = new FormGroup({
    remise: new FormControl(null),
    statusFinal: new FormControl(false),
    bc: new FormControl(null),
    bl: new FormControl(null),
    facture: new FormControl(null),
    devis: new FormControl(null),
  });
  stautsToggle: boolean;
  finalPrice: string;
  discount: number;
  pdfStr: string | ArrayBuffer;
  url: string | ArrayBuffer;
  devis: string | ArrayBuffer;
  bl: string | ArrayBuffer;
  facturePdf: string | ArrayBuffer;

  constructor(
    private apollo: Apollo,
    private ticketService: TicketService,
    private toastr: NbToastrService,
    private refDialog: NbDialogRef<ModalFinalComponent>
  ) {}

  ngOnInit(): void {
    console.log(this.rowData, "row data from final modal");
    this.test();
  }

  caculateDiscount(price: string, percent: string) {
    let discount = (+percent / 100) * +price;
    let final = +price - discount;
    this.discount = discount;
    return { finalPrice: final.toString(), discount };
  }

  test() {
    this.managerForm.valueChanges.subscribe((el) => {
      console.log(el.remise, "el");
      this.finalPrice = this.caculateDiscount(
        this.rowData.finalPrice,
        el.remise
      ).finalPrice;
      console.log(this.finalPrice, " this.finalPrice");
    });
  }

  onSelectFile(pdf: any) {
    console.log(pdf, "bc");
    const file = pdf.target.files && pdf.target.files[0];
    console.log(file, "file");
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = (event) => {
        console.log(event, "event onload");
        this.pdfStr = reader.result;
        this.url = (<FileReader>event.target).result;
      };
    }

    console.log(this.pdfStr, "pdf str");
  }

  onSelectFileDevise(pdf: any) {
    const file = pdf.target.files && pdf.target.files[0];
    console.log(file, "file");
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = (event) => {
        console.log(event, "event devis");
        this.devis = reader.result;
        this.url = (<FileReader>event.target).result;
      };
    }

    console.log(this.devis, "pdf str");
  }
  onSelectFileBl(pdf: any) {
    const file = pdf.target.files && pdf.target.files[0];
    console.log(file, "file");
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = (event) => {
        console.log(event, "event bl");
        this.bl = reader.result;
        this.url = (<FileReader>event.target).result;
      };
    }

    console.log(this.bl, "pdf str");
  }

  onSelectFileFacture(pdf: any) {
    console.log(pdf, "facture");
    const file = pdf.target.files && pdf.target.files[0];
    console.log(file, "file");
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = (event) => {
        console.log(event, "event facture");
        this.facturePdf = reader.result;
        this.url = (<FileReader>event.target).result;
      };
    }

    console.log(this.facturePdf, "pdf str");
  }

  submitManager() {
    console.log(this.pdfStr, "pdf str");
    console.log(this.facturePdf, "facture str");
    console.log(this.devis, "devise str");
    console.log(this.bl, "bl str");

    this.apollo
      .mutate<any>({
        mutation: this.ticketService.updateTicketManager(
          this.rowData._id,
          this.caculateDiscount(
            this.rowData.finalPrice,
            this.managerForm.value.remise
          ).finalPrice,
          this.managerForm.value.statusFinal,
          this.pdfStr,
          this.bl,
          this.facturePdf,
          this.devis
        ),
      })
      .subscribe(({ data }) => {
        if (data) {
          this.toastr.success(
            `la réduction est de ${
              this.caculateDiscount(
                this.rowData.finalPrice,
                this.managerForm.value.remise
              ).discount
            }`,
            "Réussite de l'affectation",
            { duration: 0 }
          );
        }
      });
    this.refDialog.close(true);
  }
  statusToggle(status: boolean) {
    console.log(status, "toggle status");
    this.stautsToggle = status;
  }
}
