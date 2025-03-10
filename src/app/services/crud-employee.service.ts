import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee/employee.model';
import { EmployeeDTO } from '../models/employee/employeeDTO.model';

@Injectable({
  providedIn: 'root',
})
export class CrudEmployeeService {
  baseUrl = environment.apiUrlEmployee;

  constructor(private http: HttpClient) {}

  AddEmployee(employeeDTO: EmployeeDTO): Observable<Employee> {
    return this.http
      .post(this.baseUrl, employeeDTO)
      .pipe(map((response) => response as Employee));
  }

  GetEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(this.baseUrl + `/${id}`);
  }

  GetEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  DeleteEmployee(id: number): Observable<number> {
    return this.http
      .delete(this.baseUrl + `/${id}`, { observe: 'response' })
      .pipe(map((response) => response.status));
  }
}
