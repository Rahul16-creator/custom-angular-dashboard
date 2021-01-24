import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { DashBoardService } from 'src/app/service/dashboard.service';

@Component({
  selector: 'app-mainchart',
  templateUrl: './mainchart.component.html',
  styleUrls: ['./mainchart.component.css']
})
export class MainchartComponent implements OnInit {

  constructor(private dashboardService: DashBoardService) { }

  charts: object = [];
  data: any = [];
  yAxis: any = [];
  result_data: any = [];
  isLoading: boolean = true;


  ngOnInit(): void {

    this.dashboardService.fetchData().subscribe(response => {
      this.data = response;

      
      this.data.forEach((item: any) => {
        if (item.Crop !== "" && item.Crop !== "All Agriculture") {
          this.result_data.push(item["2011-12"])
          this.yAxis.push(item.Crop)
        }
      })

      this.charts = new Chart('canvas1', {
        type: "bar",
        data: {
          labels: this.yAxis,
          datasets: [
            {
              label: "first data",
              data: this.result_data,
              backgroundColor: "wheat",
              borderColor: "black"
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: "Agriculture crop production",
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
