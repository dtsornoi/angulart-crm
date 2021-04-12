import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../model/employee';
import {EmployeeService} from '../service/employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  @Input("employeeId") employee: Employee;

  constructor(private employeeService: EmployeeService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.employeeService.update(this.employee).subscribe(data => this.redirectToList())
  }


  redirectToList(){
    this.router.navigate(['/employees']);
  }
}
