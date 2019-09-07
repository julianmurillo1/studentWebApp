import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from './student.service';
import { Student } from 'src/app/models/student.model';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { SetStudentAction, SetFormTypeAction } from './students.actions';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.getDataSub.unsubscribe()
  }

  columnFilter:string;
  order:string
  students:Student[];
  getDataSub:Subscription
  constructor(private router:Router, private studentService:StudentService, private store:Store<AppState> ){ 
  }

  ngOnInit() { 
    this.getStudents()
    }

  create(){
    this.router.navigateByUrl('students/create')
  }

  getStudents(){
  this.getDataSub =  this.studentService.getAllStudents().subscribe((data:Student[])=>{
      this.students = data
  })
  }

  update(student:Student){
   // this.store.dispatch(new SetStudentAction(student))
   // this.store.dispatch(new SetFormTypeAction('UPDATE'))
    this.router.navigateByUrl(`students/update/${student.id}`)
  }

  orderTable(columnFilter){
    console.log(columnFilter)
    this.columnFilter = columnFilter
    if(this.order == 'DESC') this.order = 'ASC'
    else {this.order = 'DESC'}
  } 

  delete(id){


    

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        
        

      this.studentService.deleteStudent(id).subscribe(()=>{
        this.studentService.swalModal('Success', "Student deleted", "success", null)
        this.getStudents()
      }, err=>{
        this.studentService.swalModal('Error', err.message, "error", null)
      })

      }
    })








  } 

    

}
