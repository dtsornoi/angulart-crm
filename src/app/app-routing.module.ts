import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {NewEmployeeComponent} from './new-employee/new-employee.component';
import {UpdateEmployeeComponent} from './update-employee/update-employee.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'new-employee', component: NewEmployeeComponent},
  {path: 'update-employee', component: UpdateEmployeeComponent},
  {path: 'employee-list', component: EmployeeListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
