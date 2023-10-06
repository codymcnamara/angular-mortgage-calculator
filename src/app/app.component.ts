import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-mortgage-calculator';

  loan = new FormControl('');
  interest = new FormControl('')
  years = new FormControl('');
  monthlyPayment: Number;

  constructor(){
    this.monthlyPayment = 0;
  }

  reCalculate(){
    let loanNum = Number(this.loan.value);   
    let interestNum = Number(this.interest.value);
    let yearsNum = Number(this.years.value);

    this.monthlyPayment = loanNum*((interestNum/12)*(1+(interestNum/12))*(yearsNum*12))/((1+(interestNum/12))*(yearsNum*12) - 1)
  }
}

// M = P(i(1+i)n)/((1+i)n - 1)

// M: Monthly mortgage payment
// P: Loan amount
// i: Monthly interest rate (APR / 12)
// n: Total number of payments (loan term in years x 12)