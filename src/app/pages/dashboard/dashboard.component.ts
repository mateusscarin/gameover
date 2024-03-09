import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  CHART_COLORS = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
  };

  chart: any;

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.createChart();
  }
  createChart() {
    const DATA_COUNT = 10;
    const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };
    const CHART_COLORS = {
      red: 'rgb(255, 99, 132)',
      orange: 'rgb(255, 159, 64)',
      yellow: 'rgb(255, 205, 86)',
      green: 'rgb(75, 192, 192)',
      blue: 'rgb(54, 162, 235)',
      purple: 'rgb(153, 102, 255)',
      grey: 'rgb(201, 203, 207)'
    };

    const labels = this.months({ count: 10 });
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: this.numbers(NUMBER_CFG),
          borderColor: CHART_COLORS.red,
          backgroundColor: CHART_COLORS.red,
        },
        {
          label: 'Dataset 2',
          data: this.numbers(NUMBER_CFG),
          borderColor: CHART_COLORS.blue,
          backgroundColor: CHART_COLORS.blue,
        }
      ]
    };
    this.chart = new Chart("MyChart", {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        }
      }
    });
  }

  valueOrDefault<T>(value: T | undefined, defaultValue: T) {
    return typeof value === 'undefined' ? defaultValue : value;
  }

  rand() {
    return Math.random() % 1000;
  }

  numbers(config: any) {
    var cfg = config || {};
    var from = this.valueOrDefault(cfg.from, []);
    var count = this.valueOrDefault(cfg.count, 8);
    var decimals = this.valueOrDefault(cfg.decimals, 8);
    var continuity = this.valueOrDefault(cfg.continuity, 1);
    var dfactor = Math.pow(10, decimals) || 0;
    var data = [];
    var i, value;

    for (i = 0; i < count; ++i) {
      value = (from[i] || 0) + this.rand();
      if (this.rand() <= continuity) {
        data.push(Math.round(dfactor * value) / dfactor);
      } else {
        data.push(null);
      }
    }
    return data;
  }

  months(config: any) {
    const MONTHS = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    var cfg = config || {};
    var count = cfg.count || 12;
    var section = cfg.section;
    var values = [];
    var i, value;

    for (i = 0; i < count; ++i) {
      value = MONTHS[Math.ceil(i) % 12];
      values.push(value.substring(0, section));
    }
    return values;
  }
}
