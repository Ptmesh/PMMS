export interface Employee {
  id?: number;
  employee_name: string;
  designation: string;
  email: string;
  gender: string;
  phone_number: string;
  department_id: number;
}

export interface Division {
  id?: number;
  name: string;
  short_name: string;
  division_head: number;
}
