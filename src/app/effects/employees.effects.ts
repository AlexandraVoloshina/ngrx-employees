import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, mergeMap, catchError, debounceTime } from 'rxjs/operators';
import * as fromActions from '../actions/employee.actions';
import { EmployeeService } from '../services/employee.service';

@Injectable()
export class EmployeeEffects {

  constructor(
    private actions$: Actions,
    private employeeService: EmployeeService
  ) { }

  loadAllArticles$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.ShowAllAction),
    switchMap(() =>
      this.employeeService.getAllEmployees().pipe(
        map(data => fromActions.ShowAllSuccessAction({payload: data}))
      )
    )
  ));

  createArticle$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.CreateAction),
    map(action => action.payload),
    mergeMap(article =>
      this.employeeService.createEmployee(article).pipe(
        map(res => fromActions.CreateSuccessAction({payload: res})),
        catchError(error => of(fromActions.CreateFailureAction({payload: error})))
      )
    )
  ));

  searchEmployeeById$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.GetByIdAction),
    debounceTime(500),
    map(action => action.payload),
    switchMap(id =>
      this.employeeService.getEmployeeById(id).pipe(
        map(res => {
            console.log(res);
            return fromActions.GetByIdSuccessAction({payload: res})
        })
      )
    )
  ));

  editEmployee$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.EditAction),
    map(action => action.payload),
    switchMap(employee => 
        this.employeeService.editEmployee(employee).pipe(
            map(res => fromActions.EditSuccessAction({payload: res}))
        ))
  ));

}