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
  totalPrixTotale: number;
  tempsTotal:string;
  constructor() {}

  ngOnInit(): void {
    console.log("all data", this.allData);
    this.calculateTotalPrixTotale()
  }



  calculateTotalPrixTotale() {
    let totalPrixTotale = 0;
    for (let c of this.allData.composants) {
      totalPrixTotale += c.quantity * c.sellPrice;
    }
     this.totalPrixTotale = totalPrixTotale;
  }

calculateTotalTemps(){
let totalHours
let totalMinutes
let totalseconds 

let diagTime=this.allData.diagnosticTimeByTech
let repairTime=this.allData.reparationTimeByTech

let diagTimeNumber = diagTime;
let repairTimeNumber = repairTime;

let timePartsrepairTime = repairTimeNumber.split(":");
let hoursrepairTime = parseInt(timePartsrepairTime[0]);
let minutesrepairTime = parseInt(timePartsrepairTime[1]);
let secondsrepairTime = parseInt(timePartsrepairTime[2]);

let timePartsdiagTime = diagTimeNumber.split(":");
let hoursdiagTime = parseInt(timePartsdiagTime[0]);
let minutesdiagTime = parseInt(timePartsdiagTime[1]);
let secondsdiagTime = parseInt(timePartsdiagTime[2]);


totalHours=hoursrepairTime+hoursdiagTime
totalMinutes=minutesrepairTime+minutesdiagTime
totalseconds=secondsrepairTime+secondsdiagTime



return this.tempsTotal=totalHours + ":Heures" + " "+ totalMinutes + ":Minutes" +" "+ "et"+" "+ totalseconds + ":Secondes"
}



}
