import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Chart, registerables } from 'chart.js';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  dispositive: string;
}

const DISPOSITIVES: string[] = [
  'Samsung Galaxy S21',
  'Samsung Galaxy S20',
  'Samsung Galaxy Note 20',
  'Samsung Galaxy A51',
  'Samsung Galaxy A71',
  'Xiaomi Redmi Note 10',
  'Xiaomi Mi 11',
  'Google Pixel 5',
  'Google Pixel 4a',
  'OnePlus 9 Pro',
  'OnePlus 8 Pro',
  'Huawei P40 Pro',
  'Huawei Mate 40 Pro',
  'Oppo Find X3 Pro',
  'Oppo Reno 5',
  'Vivo X60 Pro',
  'Realme 8 Pro',
  'Motorola Moto G Power',
  'LG Velvet',
  'Sony Xperia 1 III',
  'iPhone 13 Pro',
  'iPhone 13',
  'iPhone 12 Pro',
  'iPhone 12',
  'iPhone SE (2ª geração)',
  'iPhone 11',
  'iPhone XR',
  'iPhone XS',
  'iPhone X',
  'iPhone 8 Plus',
  'iPhone 7 Plus',
  'iPhone 6s Plus',
  'iPhone SE (1ª geração)',
  'iPhone 5s',
  'Apple MacBook Pro (M1)',
  'Apple MacBook Air (M1)',
  'Dell XPS 13',
  'HP Spectre x360',
  'Lenovo ThinkPad X1 Carbon',
  'Asus ZenBook 14',
  'Acer Swift 3',
  'Microsoft Surface Laptop 4',
  'Razer Blade 15',
  'HP Envy 13',
  'Dell Inspiron 15',
  'Lenovo IdeaPad Flex 5',
  'Asus ROG Zephyrus G14',
  'Acer Predator Helios 300',
  'Microsoft Surface Book 3',
  'HP Pavilion x360',
  'Lenovo Legion 5',
  'Dell XPS 15',
  'Asus VivoBook S15',
  'MSI GS66 Stealth'
];

const NAMES: string[] = [
  'João',
  'José',
  'Antônio',
  'Francisco',
  'Carlos',
  'Paulo',
  'Pedro',
  'Lucas',
  'Luiz',
  'Marcos',
  'Márcio',
  'Maria',
  'Ana',
  'Francisca',
  'Adriana'
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['id', 'name', 'progress', 'dispositive'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  chart: any;

  cards: any;

  constructor() {
    Chart.register(...registerables);
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit(): void {
    this.createChart();
    this.cards = [
      { value: 17, label: '(Usuários Adicionados)', background: '#00c0ef' },
      { value: 5092, label: '(Vendas Android)', background: '#f39c11' },
      { value: 2570, label: '(Vendas IOs)', background: '#00a65a' },
      { value: 4810, label: '(Vendas Notebooks)', background: '#dd4c39' }
    ];
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createChart() {
    const DATA_COUNT = 10;
    const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };
    const CHART_COLORS = {
      red: '#dd4c39',
      orange: 'rgb(255, 159, 64)',
      yellow: 'rgb(255, 205, 86)',
      green: '#00a65a',
      blue: 'rgb(54, 162, 235)',
      purple: 'rgb(153, 102, 255)',
      grey: 'rgb(201, 203, 207)'
    };

    const labels = this.months({ count: DATA_COUNT });
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Notebook',
          data: this.numbers(NUMBER_CFG),
          borderColor: CHART_COLORS.orange,
          backgroundColor: CHART_COLORS.orange,
        },
        {
          label: 'IOs',
          data: this.numbers(NUMBER_CFG),
          borderColor: CHART_COLORS.green,
          backgroundColor: CHART_COLORS.green,
        },
        {
          label: 'Android',
          data: this.numbers(NUMBER_CFG),
          borderColor: CHART_COLORS.red,
          backgroundColor: CHART_COLORS.red,
        }
      ]
    };
    this.chart = new Chart('MyChart', {
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

function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    dispositive: DISPOSITIVES[Math.round(Math.random() * (DISPOSITIVES.length - 1))],
  };
}
