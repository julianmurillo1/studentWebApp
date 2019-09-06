
import * as StudentActions from './students.actions'
import { InitialState } from '@ngrx/store/src/models';
import { Student } from 'src/app/models/student.model';

export interface StudentState {
    formType:StudentActions.FormType,
    student:Student
}


const initState:StudentState = {
    formType : null,
    student: null
}


export function studentReducer(state:StudentState = initState , action:StudentActions.Actions){
        switch(action.type){
            case StudentActions.SET_FORM_TYPE:
                return {
                    formType: action.formType,
                    student: state.student
                 }
            case StudentActions.SET_STUDENT:
                return {
                    formType: state.formType,
                    student: action.student
                }
            case StudentActions.UNSET_STUDENT:
                return {
                    formType: state.formType,
                    student: null
                }

            default: return state
        }
}