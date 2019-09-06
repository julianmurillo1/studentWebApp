import * as uiActions from './ui.actions'


export interface UiState{
    isLoading: boolean
}


const initState:UiState = {
    isLoading : false
}

export function UiReducer(state:UiState = initState , action:uiActions.Actions){

    switch(action.type){
        case uiActions.ACTIVATE_LOADING:
            return {
                isLoading:true
            }
        case uiActions.DEACTIVATE_LOADING:
            return   {
                isLoading:false
            }
        default: return state
    }

}