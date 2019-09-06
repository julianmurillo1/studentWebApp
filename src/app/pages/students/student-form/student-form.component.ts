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
  constructor(private fb: FormBuilder, private store:Store<AppState>, private studentService:StudentService, private router:Router) {}

  ngOnInit() {
    this.form = this.fb.group({
      Username: ["", Validators.required],
      Firstname: ["", Validators.required],
      Lastname: ["", Validators.required],
      Age: ['', Validators.compose([Validators.required, Validators.min(0)])],
      Career: ["", Validators.required],
    });


    this.loadingSub  = this.store.select('ui').subscribe((ui:UiState)=>{
      this.isLoading = ui.isLoading;
    })


    this.formTypeSub = this.store.select('students').subscribe((data:StudentState)=>{
        this.formType = data.formType
        if(this.student != data.student){
            this.student = data.student
            this.id = data.student.Id
            this.setStudentData();
        }
    })
  }

  /**
   * Set student data in the form only in the case 'UPDATE'
   */
  setStudentData(){
        this.form.setValue({
          Username: this.student.Username,
          Firstname: this.student.Firstname,
          Lastname: this.student.Lastname,
          Age: this.student.Age,
          Career: this.student.Career
        })
  }

  /**
   * Save student
   */
  saveStudent(){
    this.hasSubmitted = true;
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
  get UsernameControl():AbstractControl {
    return this.form.controls['Username'];
  }


  /**
   * @returns Firstname control
   */ 
   get FirstnameControl():AbstractControl {
    return this.form.controls['Firstname'];
  }


  /**
   * @returns Lastname control
   */ 
   get LastnameControl():AbstractControl {
    return this.form.controls['Lastname'];
  }


  /**
   * @returns Age control
   */ 
   get AgeControl():AbstractControl {
    return this.form.controls['Age'];
  }


  /**
   * @returns Career control
   */ 
   get CareerControl():AbstractControl {
    return this.form.controls['Career'];
  }


  ngOnDestroy(): void {
     this.loadingSub.unsubscribe()
     this.formTypeSub.unsubscribe()
  }

  

}
