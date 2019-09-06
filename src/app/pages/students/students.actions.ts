import { Action } from '@ngrx/store';
import { Student } from 'src/app/models/student.model';



export const SET_FORM_TYPE = '[Student] Set form Type'
export const SET_STUDENT = '[Student] Set student'
export const UNSET_STUDENT = '[Student] Unset student'


export class SetFormTypeAction implements Action{
  readonly  type = SET_FORM_TYPE;
  constructor(public formType:FormType ){}
}


export class SetStudentAction implements Action{
  readonly type = SET_STUDENT
    constructor(public student:Student ){}
}


export class UnSetStudentAction implements Action{
  readonly type = UNSET_STUDENT
 }


export type FormType = 'UPDATE' | 'SAVE'
export type Actions = SetFormTypeAction |SetStudentAction| UnSetStudentAction