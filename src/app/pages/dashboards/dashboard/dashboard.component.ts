import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { DashboardService } from "../dashboard.service";

@Component({
  selector: "ngx-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  options = {
    backgroundColor: echarts.bg,
    color: [
      "#FF0000",
      "#0000FF",
      "#00FF00",
      "#FFFF00",
      "#FFA500",
      "#800080",
      "#FFC0CB",
    ],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },

    series: [
      {
        name: "Countries",
        type: "pie",
        radius: "80%",
        center: ["50%", "50%"],
        data: [
          { value: 335, name: "Germany" },
          { value: 310, name: "France" },
          { value: 234, name: "Canada" },
          { value: 135, name: "Russia" },
          { value: 1548, name: "USA" },
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: echarts.itemHoverShadowColor,
          },
        },
        label: {
          normal: {
            textStyle: {
              color: echarts.textColor,
            },
          },
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: echarts.axisLineColor,
            },
          },
        },
      },
    ],
  };

  constructor(
    private apollo: Apollo,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.getChart();
  }

  getChart() {
    this.apollo
      .query<any>({
        query: this.dashboardService.getClientCompanyChart(),
      })
      .subscribe(({ data }) => {
        this.options = {
          backgroundColor: echarts.bg,
          color: [
            "#FF0000",
            "#0000FF",
            "#00FF00",
            "#FFFF00",
            "#FFA500",
            "#800080",
            "#FFC0CB",
            "#17B9D7",
          ],
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)",
          },

          series: [
            {
              name: "Type",
              type: "pie",
              radius: "80%",
              center: ["50%", "50%"],
              data: data.getClientCompanyChart,
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: echarts.itemHoverShadowColor,
                },
              },
              label: {
                normal: {
                  textStyle: {
                    color: echarts.textColor,
                  },
                },
              },
              labelLine: {
                normal: {
                  lineStyle: {
                    color: echarts.axisLineColor,
                  },
                },
              },
            },
          ],
        };
      });
  }
}
