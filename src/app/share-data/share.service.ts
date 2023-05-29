import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ShareService {
  private tpeData = new BehaviorSubject<any>([]);
  constructor() {}

  currentMessage = this.tpeData.asObservable();

  changeMessage(message: any) {
    this.tpeData.next(message);
  }
}
