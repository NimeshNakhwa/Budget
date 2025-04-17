// filepath: c:\Users\Nimesh\Desktop\Frontend fsd\Budget\UserProject\src\app\budget-allocated\budget-allocated.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BudgetService } from '../services/budget.service';

@Component({
  standalone: true,
  selector: 'app-budget-allocated',
  templateUrl: './budget-allocated.component.html',
  styleUrls: ['./budget-allocated.component.css'],
  imports: [CommonModule, FormsModule]
})
export class BudgetAllocatedComponent {
  allocatedAmount: number = 0;
  allocatedCategory: string = '';
  categories: string[] = ['Marketing', 'Operations', 'Development', 'HR'];
  showSuccess: boolean = false;

  constructor(private budgetService: BudgetService) {}

  allocateBudget() {
    if (this.allocatedCategory && this.allocatedAmount > 0) {
      const budget = {
        category: this.allocatedCategory,
        amount: this.allocatedAmount
      };

      this.budgetService.createBudget(budget).subscribe({
        next: (response) => {
          console.log('Budget created successfully:', response);
          this.showSuccess = true;

          // Hide success message after 3 seconds
          setTimeout(() => {
            this.showSuccess = false;
          }, 3000);
        },
        error: (error) => {
          console.error('Error creating budget:', error);
          alert('Failed to create budget. Please try again.');
        }
      });
    } else {
      alert('Please select a category and enter a valid amount.');
    }
  }
}