export interface LoanInput {
  loanAmount: number;
  interestRate: number;
  loanTermYears: number;
  loanTermMonths: number;
}

export interface AmortizationScheduleItem {
  period: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

export interface AmortizationResult {
  monthlyPayment: number;
  totalInterest: number;
  schedule: AmortizationScheduleItem[];
}
