import { Action } from '@ngrx/store'

export  const ACTIVATE_LOADING = '[UI] Cargando'
export  const DEACTIVATE_LOADING = '[UI] Terminado'


export class ActivateLoadingAction implements Action{
    readonly type = ACTIVATE_LOADING;
}


export class DeActivateLoadingAction implements Action{
    readonly type = DEACTIVATE_LOADING;
}


export type Actions = ActivateLoadingAction | DeActivateLoadingAction