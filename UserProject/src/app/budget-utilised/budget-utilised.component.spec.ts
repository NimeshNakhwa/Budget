import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BudgetUtilisedComponent } from './budget-utilised.component';
import { FormsModule } from '@angular/forms';

describe('BudgetUtilisedComponent', () => {
  let component: BudgetUtilisedComponent;
  let fixture: ComponentFixture<BudgetUtilisedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BudgetUtilisedComponent],
      imports: [FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BudgetUtilisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit utilization correctly', () => {
    component.selectedEvent = 'Workshop';
    component.utilizedAmount = 500;
    component.submitUtilization();
    expect(component.showSuccess).toBeTrue();
  });

  it('should show alert when inputs are invalid', () => {
    spyOn(window, 'alert');
    component.selectedEvent = '';
    component.utilizedAmount = 0;
    component.submitUtilization();
    expect(window.alert).toHaveBeenCalledWith('Please select an event and enter a valid amount.');
  });
});
