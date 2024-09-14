import { Injectable } from '@angular/core';
import {AmortizationResult, AmortizationScheduleItem, LoanInput} from "../model/amortization.model";


@Injectable({
  providedIn: 'root'
})
export class AmortizationService {
  calculateAmortization(input: LoanInput): AmortizationResult {
    const { loanAmount, interestRate, loanTermYears, loanTermMonths } = input;
    const totalMonths = loanTermYears * 12 + loanTermMonths;
    const monthlyRate = interestRate / 100 / 12;

    const monthlyPayment = this.calculateMonthlyPayment(loanAmount, monthlyRate, totalMonths);
    const schedule = this.generateAmortizationSchedule(loanAmount, monthlyRate, totalMonths, monthlyPayment);
    const totalInterest = schedule.reduce((sum, item) => sum + item.interest, 0);

    return {
      monthlyPayment,
      totalInterest,
      schedule
    };
  }

  private calculateMonthlyPayment(principal: number, monthlyRate: number, totalMonths: number): number {
    return (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);
  }

  private generateAmortizationSchedule(
    principal: number,
    monthlyRate: number,
    totalMonths: number,
    monthlyPayment: number
  ): AmortizationScheduleItem[] {
    let balance = principal;
    const schedule: AmortizationScheduleItem[] = [];

    for (let period = 1; period <= totalMonths; period++) {
      const interest = balance * monthlyRate;
      const principalPayment = monthlyPayment - interest;
      balance -= principalPayment;

      schedule.push({
        period,
        payment: monthlyPayment,
        principal: principalPayment,
        interest,
        balance: Math.max(0, balance)
      });
    }

    return schedule;
  }

  getAnnualSchedule(monthlySchedule: AmortizationScheduleItem[]): AmortizationScheduleItem[] {
    const annualSchedule: AmortizationScheduleItem[] = [];
    for (let i = 0; i < monthlySchedule.length; i += 12) {
      const yearEnd = monthlySchedule[Math.min(i + 11, monthlySchedule.length - 1)];
      annualSchedule.push({
        period: Math.floor(i / 12) + 1,
        payment: monthlySchedule.slice(i, i + 12).reduce((sum, item) => sum + item.payment, 0),
        principal: monthlySchedule.slice(i, i + 12).reduce((sum, item) => sum + item.principal, 0),
        interest: monthlySchedule.slice(i, i + 12).reduce((sum, item) => sum + item.interest, 0),
        balance: yearEnd.balance
      });
    }
    return annualSchedule;
  }
}
