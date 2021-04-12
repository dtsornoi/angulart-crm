import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeeUrl: string;

  constructor(private http: HttpClient) {
      this.employeeUrl = 'http://localhost:8080/api/employees';
  }

  public  getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.employeeUrl);
  }

  public save(employee: Employee){
    return this.http.post<Employee>(this.employeeUrl, employee);
  }

  public update(employee: Employee){
    return this.http.put<Employee>(this.employeeUrl, employee);
  }

  public findEmployee(id: number){
    return this.http.get<Employee>(`${this.employeeUrl}/${id}`);
  }

  public delete(id: number){
    return this.http.delete(`${this.employeeUrl}/${id}`);
  }
}
