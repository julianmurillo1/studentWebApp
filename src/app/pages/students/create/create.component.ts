import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { SetFormTypeAction } from '../students.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateStudentComponent implements OnInit {

  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new SetFormTypeAction('SAVE'))
  }

}
