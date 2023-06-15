import { of as observableOf, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Contacts, RecentUsers, UserData } from "../data/users";

@Injectable()
export class UserService extends UserData {
  constructor() {
    super();
    this.getUserName();
  }
  private time: Date = new Date();

  private users = {
    nom: { name: localStorage.getItem("username"), picture: "" },
  };
  private types = {
    mobile: "mobile",
    home: "home",
    work: "work",
  };

  nom = "";

  private contacts: Contacts[] = [
    { user: this.users.nom, type: this.types.mobile },
  ];
  private recentUsers: RecentUsers[] = [
    {
      user: this.users.nom,
      type: this.types.home,
      time: this.time.setHours(21, 12),
    },
  ];

  getUsers(): Observable<any> {
    this.users.nom = { name: localStorage.getItem("username"), picture: "" };
    return observableOf(this.users);
  }

  getContacts(): Observable<Contacts[]> {
    return observableOf(this.contacts);
  }

  getRecentUsers(): Observable<RecentUsers[]> {
    return observableOf(this.recentUsers);
  }
  async getUserName() {
    this.users.nom = { name: localStorage.getItem("username"), picture: "" };
    return observableOf(this.users);
  }
}
