import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Employee } from '../../../_datamodels/Organisation';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-getemp',
  imports: [CommonModule],
  templateUrl: './getemp.component.html',
  styleUrl: './getemp.component.css',
})
export class GetempComponent {
  employees: Employee[] = [];

  constructor(private empSer: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.empSer.getAllEmployees().subscribe((data) => {
      console.log('Employee Data Array:', data);
      this.employees = data;
    });
  }
}
