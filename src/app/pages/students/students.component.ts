import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from './student.service';
import { Student } from 'src/app/models/student.model';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { SetStudentAction, SetFormTypeAction } from './students.actions';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  columnFilter:string;
  order:string
  students:Student[];
  constructor(private router:Router, private studentService:StudentService, private store:Store<AppState> ){ 
  }

  ngOnInit() { 
    this.studentService.getAllStudents().subscribe((data:Student[])=>{
        this.students = data
    })
    }

  create(){
    this.router.navigateByUrl('students/create')
  }

  update(student:Student){
   // this.store.dispatch(new SetStudentAction(student))
   // this.store.dispatch(new SetFormTypeAction('UPDATE'))
    this.router.navigateByUrl(`students/update/${student.Id}`)
  }

  orderTable(columnFilter){
    console.log(columnFilter)
    this.columnFilter = columnFilter
    if(this.order == 'DESC') this.order = 'ASC'
    else {this.order = 'DESC'}
  } 

}
