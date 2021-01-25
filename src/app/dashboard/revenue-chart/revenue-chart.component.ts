import { Component, OnInit } from '@angular/core';
import { DashBoardService } from 'src/app/service/dashboard.service';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-revenue-chart',
  templateUrl: './revenue-chart.component.html',
  styleUrls: ['./revenue-chart.component.css']
})

export class RevenueChartComponent implements OnInit {
  constructor(private dashboardService: DashBoardService) { }

  chart: object = [];
  data: any = [];
  yAxis: any = [];
  result_data: any = [];
  isLoading: boolean = true;

  ngOnInit(): void {

    //get the data from service
    this.dashboardService.fetchData().subscribe(response => {
      this.data = response;
      this.isLoading = false;

      // storing the seperate data into  arrays
      this.data.forEach((item: any) => {
        if (item.Crop !== "All Agriculture" && item.Crop !== "") {
          let sum: Number = 0;
          Object.entries(item).forEach((t: any, i) => {
            if (t[0] === "Crop") {
              this.yAxis.push(t[1]);
            } else {
              sum += t[1];
            }
          })
          this.result_data.push(sum);
        }

      })

      //chart configuration
      this.chart = new Chart('canvas2', {
        type: "line",
        data: {
          labels: this.yAxis,
          datasets: [
            {
              label: "status",
              data: this.result_data,
              borderColor: "rgba(0, 0, 0, 0.699)",
              backgroundColor: " rgba(255, 0, 106, 0.5)"
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: "All Product Year Revenue",
            fontSize: 25
          },
          legend: {
            display: false
          }
        }
      })

    })

  }


}
