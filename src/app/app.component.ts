/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from "@angular/core";
import { AnalyticsService } from "./@core/utils/analytics.service";
import { SeoService } from "./@core/utils/seo.service";
import { TicketService } from "./pages/ticket/ticket/ticket.service";
import { NbToastrService } from "@nebular/theme";
import { ROLE } from "./roles";

@Component({
  selector: "ngx-app",
  template: "<router-outlet></router-outlet>",
})
export class AppComponent implements OnInit {
  constructor(
    private analytics: AnalyticsService,
    private seoService: SeoService,
    private ticketService: TicketService,
    private toastr: NbToastrService
  ) {}

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
    this.getNotificationSocket();
  }

  getNotificationSocket() {
    const currentUser = localStorage.getItem("username");
    const roleUser = localStorage.getItem("role");
    //--------
    this.ticketService.getNotification().subscribe((data) => {
      if (data.assignedTo === currentUser) {
        console.log("data", data);
        this.toastr.success(`${data.title} à faire`, "Nouveau Ticket", {
          duration: 0,
        });
      }
    });
    //--------

    this.ticketService.getTicketForMagasin().subscribe((data) => {
      if (roleUser === ROLE.MAGASIN) {
        console.log("data sent to magasn", data);
        this.toastr.success(``, "Nouveau Ticket diagnostiqué", {
          duration: 0,
        });
      }
    });
  }
}
