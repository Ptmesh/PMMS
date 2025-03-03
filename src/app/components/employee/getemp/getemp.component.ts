import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Employee } from '../../../_datamodels/Organisation';
import { EmployeeService } from '../../../services/employee.service';
// import { AddempComponent } from '../addemp/addemp.component';

@Component({
  selector: 'app-getemp',
  imports: [CommonModule],
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

  deleteEmployee(id: number | undefined) {
    if (id === undefined) return;
    if (confirm('Are you sure you want to delete this employee?')) {
      this.empSer.deleteEmployee(id).subscribe(() => {
        this.loadEmployees();
        this.selectedEmployee = null;
      });
    }
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
