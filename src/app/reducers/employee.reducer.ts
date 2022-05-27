import { createFeatureSelector, createSelector, createReducer, on, Action } from '@ngrx/store';
import * as fromActions from '../actions/employee.actions';
import { EmployeeState } from './app.states';

export const initialState: EmployeeState = {employees: [], message: ''};

// Creating reducer
const _articleReducer = createReducer(
  initialState,
  on(fromActions.ShowAllSuccessAction, (state, {payload}) => ({employees: payload, message: 'Success'})),
  on(fromActions.CreateSuccessAction, (state, {payload}) => ({employees: [payload], message: 'Employee Created.'})),
  on(fromActions.CreateFailureAction, (state, {payload}) => ({employees: [], message: payload})),
  on(fromActions.GetByIdSuccessAction, (state, {payload}) => ({employees: payload, message: 'Success'})),    
  on(fromActions.ResetAction, (state) => ({ employees: [], message: ''}))
);

export function employeeReducer(state: any, action: Action) {
  return _articleReducer(state, action);
}

// Creating selectors
export const getEmployeeState = createFeatureSelector<EmployeeState>('employeeState');

export const getEmployees = createSelector(
    getEmployeeState, 
    (state: EmployeeState) => state.employees 
);

export const getMessage = createSelector(
  getEmployeeState, 
  (state: EmployeeState) => state.message
); 