import { createAction, props } from '@ngrx/store';
import { Employee } from '../models/employee';

export const ShowAllAction = createAction('[EMPLOYEE] Show All');
export const ShowAllSuccessAction = createAction('[EMPLOYEE] Show All Success', props<{ payload: Employee[]}>());
export const CreateAction = createAction('[EMPLOYEE] Create', props<{ payload: Employee}>());
export const CreateSuccessAction = createAction('[EMPLOYEE] Create Success', props<{ payload: Employee}>());
export const CreateFailureAction = createAction('[EMPLOYEE] Create Failure', props<{ payload: any}>());
export const GetByIdAction = createAction('[EMPLOYEE] Get by Id', props<{ payload: string}>());
export const GetByIdSuccessAction = createAction('[EMPLOYEE] Get by Id Success', props<{ payload: Employee[]}>());
export const EditAction = createAction('[EMPLOYEE] Edit', props<{ payload: Employee}>());
export const EditSuccessAction = createAction('[EMPLOYEE] Edit Success', props<{ payload: Employee}>());
export const ResetAction = createAction('[EMPLOYEE] Reset'); 