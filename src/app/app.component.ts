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

@Component({
  selector: "ngx-app",
  template: "<router-outlet></router-outlet>",
})
export class AppComponent implements OnInit {
  constructor(
    private analytics: AnalyticsService,
    private seoService: SeoService,
    private ticketService: TicketService
  ) {}

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
    this.getNotificationSocket();
  }

  getNotificationSocket() {
    const currentUser = localStorage.getItem("username");
    const roleUser = localStorage.getItem("role");

    console.log(currentUser, roleUser, "data to pass in app component");
    let notificationData = this.ticketService.getNotification(currentUser);
    console.log(notificationData, "in app component");
    this.ticketService.getTicketForMagasin(roleUser);
  }
}
