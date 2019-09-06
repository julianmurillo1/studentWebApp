import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './pages/students/students.component';
import { DetailStudentComponent } from './pages/students/detail/detail.component';
import { CreateStudentComponent } from './pages/students/create/create.component';
import { UpdateStudentComponent } from './pages/students/update/update.component';


const routes: Routes = [
  {path:"students", component:StudentsComponent, pathMatch:'full'},
  {path:"students/create", component:CreateStudentComponent, pathMatch:'full'},
  {path:"students/update/:id", component:UpdateStudentComponent, pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
