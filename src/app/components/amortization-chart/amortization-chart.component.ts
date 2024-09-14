import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import * as Highcharts from 'highcharts';
import {AmortizationScheduleItem} from "../../model/amortization.model";

@Component({
  selector: 'app-amortization-chart',
  templateUrl: './amortization-chart.component.html',
  styleUrls: ['./amortization-chart.component.css']
})
export class AmortizationChartComponent implements OnChanges {
  @Input() schedule: AmortizationScheduleItem[] = [];

  Highcharts: typeof Highcharts = Highcharts;
  lineChartOptions: Highcharts.Options = {};
  pieChartOptions: Highcharts.Options = {};

  ngOnChanges(changes: SimpleChanges) {
    if (changes['schedule']) {
      this.updateCharts();
    }
  }

  private updateCharts() {
    this.updateLineChart();
    this.updatePieChart();
  }

  private updateLineChart() {
    this.lineChartOptions = {
      title: { text: 'Balance Over Time' },
      xAxis: { categories: this.schedule.map(item => item.period.toString()) },
      yAxis: { title: { text: 'Balance' } },
      series: [{
        type: 'line',
        name: 'Balance',
        data: this.schedule.map(item => item.balance)
      }]
    };
  }

  private updatePieChart() {
    const totalPrincipal = this.schedule[0].balance;
    const totalInterest = this.schedule.reduce((sum, item) => sum + item.interest, 0);

    this.pieChartOptions = {
      title: { text: 'Principal vs Interest' },
      series: [{
        type: 'pie',
        name: 'Amount',
        data: [
          { name: 'Principal', y: totalPrincipal },
          { name: 'Interest', y: totalInterest }
        ]
      }]
    };
  }
}
