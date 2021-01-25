import { Component, OnInit } from '@angular/core';
import { DashBoardService } from 'src/app/service/dashboard.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-yearschart',
  templateUrl: './yearschart.component.html',
  styleUrls: ['./yearschart.component.css']
})
export class YearschartComponent implements OnInit {
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
        if (item.Crop === "All Agriculture") {
          Object.entries(item).forEach((t: any, i) => {
            if (t[0] !== "Crop") {
              this.yAxis.push(t[0])
              this.result_data.push(t[1])
            }
          })
        }

      })

      //chart configuration
      this.chart = new Chart('canvas3', {
        type: "bar",
        data: {
          labels: this.yAxis,
          datasets: [
            {
              label: "status",
              data: this.result_data,
              backgroundColor: "grey",
              borderColor: "black"
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: "Last 8 Year Report",
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
