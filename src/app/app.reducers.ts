
import { ActionReducerMap } from '@ngrx/store';
import { UiState, UiReducer } from './shared/ui.reducer';
import { StudentState, studentReducer } from './pages/students/students.reducer';







export interface AppState{
   ui:UiState,
   students:StudentState
}


export const reducers:ActionReducerMap<AppState> = {
        ui:UiReducer,
        students:studentReducer
}