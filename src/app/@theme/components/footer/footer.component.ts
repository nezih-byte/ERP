import { Component } from "@angular/core";

@Component({
  selector: "ngx-footer",
  styleUrls: ["./footer.component.scss"],
  template: `
    <span class="created-by"> Created with ♥ by Skander & Nezih </span>
    <div class="socials">
      <a
        href="https://fixtronix.tn/"
        target="_blank"
        class="ion ion-social-github"
      ></a>
      <a
        href="https://www.facebook.com/FixtronixTunisia/"
        target="_blank"
        class="ion ion-social-facebook"
      ></a>
      <!-- <a href="#" target="_blank" class="ion ion-social-linkedin"></a> -->
    </div>
  `,
})
export class FooterComponent {}
