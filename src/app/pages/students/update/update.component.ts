import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { SetFormTypeAction, SetStudentAction, UnSetStudentAction } from '../students.actions';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateStudentComponent implements OnInit, OnDestroy {

  id;
  constructor(private router:Router, private store:Store<AppState>, private activatedRoute:ActivatedRoute, private studentService:StudentService) { 
     
  }
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.store.dispatch(new SetFormTypeAction('UPDATE'))
    this.getData()
  }

  getData(){
    this.studentService.getStudent(this.id).subscribe((res:Student)=>{
              this.store.dispatch(new SetStudentAction(res))
    }, err =>{
    this.router.navigateByUrl('')
    })
  }
  
  ngOnDestroy(): void {
    this.store.dispatch(new UnSetStudentAction)
  }

}
