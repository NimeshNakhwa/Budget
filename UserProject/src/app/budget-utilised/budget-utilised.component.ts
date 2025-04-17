import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-budget-utilised',
  templateUrl: './budget-utilised.component.html',
  styleUrls: ['./budget-utilised.component.css'],
  imports: [CommonModule, FormsModule]  // ✅ Import CommonModule & FormsModule
})
export class BudgetUtilisedComponent {
  selectedEvent: string = '';
  events: string[] = ['CSI', 'IT', 'EXTX', 'Tsdw'];
  utilizedAmount: number = 0;
  showSuccess: boolean = false;

  submitUtilization() {
    if (this.selectedEvent && this.utilizedAmount > 0) {
      console.log(`Event: ${this.selectedEvent}, Utilized Amount: ${this.utilizedAmount}`);
      this.showSuccess = true;

      // Hide success message after 3 seconds
      setTimeout(() => {
        this.showSuccess = false;
      }, 3000);
    } else {
      alert('Please select an event and enter a valid amount.');
    }
  }
}
