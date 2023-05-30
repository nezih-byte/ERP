import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DashboardsRoutingModule } from "./dashboards-routing.module";
import { NbCardModule } from "@nebular/theme";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { NgxEchartsModule } from "ngx-echarts";
import { NgxEchartsDirective } from "ngx-echarts/lib/ngx-echarts.directive";
import { ChartModule } from "angular2-chartjs";
import { ChartsModule } from "../charts/charts.module";

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardsRoutingModule,
    NbCardModule,
    NgxEchartsModule,
    ChartsModule,
  ],
})
export class DashboardsModule {}
