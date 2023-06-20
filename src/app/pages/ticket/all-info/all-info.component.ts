import { Component, OnInit } from "@angular/core";
import { log } from "console";
import * as moment from "moment";

@Component({
  selector: "ngx-all-info",
  templateUrl: "./all-info.component.html",
  styleUrls: ["./all-info.component.scss"],
})
export class AllInfoComponent implements OnInit {
  allData;
  constructor() {}

  ngOnInit(): void {
    console.log("all data", this.allData);
  }



  calculateTotalPrixTotale(): number {
    let totalPrixTotale = 0;
    for (let c of this.allData.composants) {
      totalPrixTotale += c.quantity * c.sellPrice;
    }
    return totalPrixTotale;
  }

calculateTotalTemps(){
let tempsTotal 
console.log(typeof(this.allData.reparationTimeByTech),"this.allData.reparationTimeByTech")

let diagTime=moment(this.allData.diagnosticTimeByTech).format("HH:mm:ss")
let repairTime=moment(this.allData.reparationTimeByTech).format("HH:mm:ss")
let x=new Date(diagTime)
console.log("value of x ",x)
console.log(repairTime,"repairTime")
console.log(typeof(diagTime),"diagTime")

tempsTotal=repairTime+diagTime

return tempsTotal
}

}
