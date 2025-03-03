import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Employee } from '../../../_datamodels/Organisation';
import { EmployeeService } from '../../../services/employee.service';
import { AddempComponent } from '../addemp/addemp.component';

@Component({
  selector: 'app-getemp',
  imports: [CommonModule, AddempComponent],
  templateUrl: './getemp.component.html',
  styleUrl: './getemp.component.css',
})
export class GetempComponent {
  employees: Employee[] = [];
  selectedEmployee: Employee | null = null;

  constructor(private empSer: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.empSer.getAllEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  selectEmployee(emp: Employee) {
    this.selectedEmployee = emp;
  }

  // addEmployee(newEmp: Employee) {
  //   this.empSer.addEmployee(newEmp).subscribe(() => {
  //     this.loadEmployees();
  //   });
  // }

  // deleteEmployee(id: number) {
  //   this.empSer.deleteEmployee(id).subscribe(() => {
  //     this.loadEmployees();
  //     this.selectedEmployee = null;
  //   });
  // }
}
