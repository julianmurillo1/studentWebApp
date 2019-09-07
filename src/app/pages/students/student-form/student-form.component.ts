import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from "@angular/forms";
import { Student } from "src/app/models/student.model";
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ActivateLoadingAction, DeActivateLoadingAction } from 'src/app/shared/ui.actions';
import { StudentService } from '../student.service';
import { UiState } from 'src/app/shared/ui.reducer';
import { StudentState } from '../students.reducer';
import { FormType } from '../students.actions';
import { Router } from '@angular/router';
@Component({
  selector: "app-student-form",
  templateUrl: "./student-form.component.html",
  styleUrls: ["./student-form.component.css"],
})

export class StudentFormComponent implements OnInit, OnDestroy {
  form: FormGroup;
  hasSubmitted = false;
  loadingSub:Subscription;
  formTypeSub:Subscription
  isLoading:boolean;
  formType:FormType
  id;
  student:Student
  constructor(private fb: FormBuilder, private store:Store<AppState>, private studentService:StudentService, private router:Router) {
    this.form = this.fb.group({
      username: ["",  Validators.compose([Validators.required, Validators.maxLength(20)  ])],
      firstname:["",  Validators.compose([Validators.required, Validators.maxLength(20)  ])],
      lastname:["",  Validators.compose([Validators.required, Validators.maxLength(20)  ])],
      age: ['', Validators.compose([Validators.required, Validators.min(0)])],
      career: ["",  Validators.compose([Validators.required, Validators.maxLength(20)  ])],
    });
 
  }

  ngOnInit() {



    this.loadingSub  = this.store.select('ui').subscribe((ui:UiState)=>{
      this.isLoading = ui.isLoading;
    })


    this.formTypeSub = this.store.select('students').subscribe((data:StudentState)=>{
        this.formType = data.formType
        if(this.student != data.student){
            this.student = data.student
            this.id = data.student.id
            this.setStudentData();
        }
    })
}

  /**
   * Set student data in the form only in the case 'UPDATE'
   */
  setStudentData(){
        this.form.setValue({
          username: this.student.username,
          firstname: this.student.firstname,
          lastname: this.student.lastname,
          age: this.student.age,
          career: this.student.career
        })
  }

  /**
   * Save student
   */
  saveStudent(){
    this.hasSubmitted = true;
    console.log(this.age.errors)
    if(!this.form.valid) return 
    else{
      this.store.dispatch(new ActivateLoadingAction())
      const student = new Student(this.form.value)



      if(this.formType == 'SAVE'){
        this.studentService.saveStudent(student).subscribe((res)=>{
          this.store.dispatch(new DeActivateLoadingAction)
          this.studentService.swalModal("Success", 'Student Created', 'success', '')
          this.form.reset()
          this.hasSubmitted = false;
        }, err=>{
           this.store.dispatch(new DeActivateLoadingAction)
           this.studentService.swalModal("Error!!!", err.message, 'error', '')
        })
      }


       else  if(this.formType == 'UPDATE'){

        this.studentService.updateStudent(student, this.id).subscribe((res)=>{
          this.store.dispatch(new DeActivateLoadingAction)
          this.studentService.swalModal("Success", 'Student updated', 'success', '')
          this.router.navigateByUrl('students')
        }, err=>{
          console.error(err)
          this.studentService.swalModal("Error!!!", err.message, 'error', '')
          this.store.dispatch(new DeActivateLoadingAction)
        })
      }


    }
  }

  /**
   * @returns Username control
   */ 
   get  username() {
    return this.form.get('username');
  }


  /**
   * @returns Firstname control
   */ 
  get   firstname():AbstractControl {
    return this.form.get('firstname');
  }


  /**
   * @returns Lastname control
   */ 
  get  lastname():AbstractControl {
    return this.form.controls['lastname'];
  }


  /**
   * @returns Age control
   */ 
  get   age():AbstractControl {
    return this.form.controls['age'];
  }


  /**
   * @returns Career control
   */ 
  get   career():AbstractControl {
    return this.form.controls['career'];
  }


  ngOnDestroy(): void {
     this.loadingSub.unsubscribe()
     this.formTypeSub.unsubscribe()
  }

  

}
