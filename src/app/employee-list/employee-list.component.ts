import { Component, OnInit } from '@angular/core';
import {Employee} from '../model/employee';
import {EmployeeService} from '../service/employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe(data => {
      this.employees = data;
    });
  }

  deleteEmployee(id: number) {
    this.employeeService.delete(id)
      .subscribe(data =>
        this.employeeService
        .getAllEmployees()
        .subscribe(data => {
      this.employees = data;
    }));
  }

  redirectToUpdatePage() {
    this.router.navigate(['/updateEmployee']);
  }

  isClickedButton(employee: Employee) {
    return employee.isActive = !employee.isActive;
  }
}
