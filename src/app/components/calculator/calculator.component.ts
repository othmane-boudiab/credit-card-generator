import { Component } from '@angular/core';
import {AmortizationService} from "../../service/amortization.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AmortizationResult, LoanInput} from "../../model/amortization.model";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  calculatorForm: FormGroup;
  result: AmortizationResult | null = null;

  constructor(
    private fb: FormBuilder,
    private amortizationService: AmortizationService
  ) {
    this.calculatorForm = this.fb.group({
      loanAmount: [200000, [Validators.required, Validators.min(1)]],
      interestRate: [3.5, [Validators.required, Validators.min(0), Validators.max(100)]],
      loanTermYears: [30, [Validators.required, Validators.min(1)]],
      loanTermMonths: [0, [Validators.required, Validators.min(0), Validators.max(11)]]
    });
  }

  calculate() {
    if (this.calculatorForm.valid) {
      const input: LoanInput = this.calculatorForm.value;
      this.result = this.amortizationService.calculateAmortization(input);
    }
  }
}
