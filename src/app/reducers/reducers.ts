import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.states';
import * as fromReducer from './employee.reducer';

export const reducers: ActionReducerMap<AppState> = {
  employeeState: fromReducer.employeeReducer
};