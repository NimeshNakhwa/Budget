import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetService } from '../services/budget.service';

@Component({
  standalone: true,
  selector: 'app-budget-utilised',
  templateUrl: './budget-utilised.component.html',
  styleUrls: ['./budget-utilised.component.css'],
  imports: [CommonModule]
})
export class BudgetUtilisedComponent implements OnInit {
  rawBudgets: any[] = []; // To store the raw response data

  constructor(private budgetService: BudgetService) {}

  ngOnInit() {
    this.fetchUtilizedBudgets();
  }

  fetchUtilizedBudgets() {
    this.budgetService.getAllBudgets().subscribe({
      next: (response) => {
        console.log('Fetched utilized budgets:', response);
        this.rawBudgets = response; // Store the raw response data
      },
      error: (error) => {
        console.error('Error fetching utilized budgets:', error);
        alert('Failed to fetch utilized budgets. Please try again.');
      }
    });
  }
}