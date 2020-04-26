import {Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
// @ts-ignore
const More = require('highcharts/highcharts-more');
More(Highcharts);

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  private pieChartData: any = {
    data: [
      {
        data: [
          {name: 'Program 1', y: 10},
          {name: 'Program 2', y: 25},
          {name: 'Program 3', y: 45}
        ]
      }
    ]
  };

  private chartOptions: any = {
    legend: {
      verticalAlign: 'middle',
      alignColumns: true,
      layout: 'vertical',
      align: 'right',
      width: 150
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        showInLegend: true,
        dataLabels: {
          distance: '-30%',
          enabled: true,
          format: '{point.percentage:.1f} %'
        }
      }
    },
    colors: ['#00B6CB', '#0172F0', '#F12296'],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            // enabled: false
          }
        }
      }]
    },
    chart: {
      type: 'pie',
      // height: 700
    },
    title: {
      text: 'Projects Count Per Program'
    },
    credits: {
      enabled: false
    },
    tooltip: {
      useHTML: true,
      headerFormat: '<small>{point.key}</small><table>',
      pointFormat: '<tr>' +
        '<td style="text-align: right"><b>{point.y} ({point.percentage:.1f}%)</b></td></tr>',
      footerFormat: '</table>',
    },
    series: this.pieChartData.data
  };

  public selectedCategory: number;

  public selectedMeasure: number;

  public selectedAggregation: number;

  constructor() {
  }

  ngOnInit(): void {
    Highcharts.chart('container', this.chartOptions);
  }

}
