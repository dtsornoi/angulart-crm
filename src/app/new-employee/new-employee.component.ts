import { Component, OnInit } from '@angular/core';
import {Employee} from '../model/employee';
import {Router} from '@angular/router';
import {EmployeeService} from '../service/employee.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  employee: Employee;

  constructor(private  router: Router, private employeeService: EmployeeService) {
    this.employee = new Employee();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.employeeService.save(this.employee).subscribe(responce => this.redirect());
  }

  redirect(){
    this.router.navigate(['/employees']);
  }
}
