import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {NewEmployeeComponent} from './new-employee/new-employee.component';
import {UpdateEmployeeComponent} from './update-employee/update-employee.component';

const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent},
  {path: 'newEmployee', component: NewEmployeeComponent},
  {path: 'updateEmployee', component: UpdateEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
