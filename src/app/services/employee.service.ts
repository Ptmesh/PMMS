import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../_datamodels/Organisation';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.url}/employees`);
  }

  deleteEmployee(id: number) {
    return this.http.delete(`${this.url}/employees/${id}`);
  }
}
