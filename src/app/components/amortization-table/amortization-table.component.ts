import {Component, Input, SimpleChanges} from '@angular/core';
import {AmortizationService} from "../../service/amortization.service";
import {AmortizationScheduleItem} from "../../model/amortization.model";

@Component({
  selector: 'app-amortization-table',
  templateUrl: './amortization-table.component.html',
  styleUrls: ['./amortization-table.component.css']
})
export class AmortizationTableComponent {
  @Input() schedule: AmortizationScheduleItem[] = [];

  displaySchedule: AmortizationScheduleItem[] = [];
  isAnnual = false;

  constructor(private amortizationService: AmortizationService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['schedule']) {
      this.updateDisplaySchedule();
    }
  }

  toggleScheduleType() {
    this.isAnnual = !this.isAnnual;
    this.updateDisplaySchedule();
  }

  private updateDisplaySchedule() {
    this.displaySchedule = this.isAnnual
      ? this.amortizationService.getAnnualSchedule(this.schedule)
      : this.schedule;
  }

  exportToExcel() {
    // Implementation for exporting to Excel will go here
    // This will require additional setup and possibly a library like xlsx
    console.log('Export to Excel functionality to be implemented');
  }
}
