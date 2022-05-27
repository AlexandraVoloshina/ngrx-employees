import { FormBuilder, Validators } from '@angular/forms'
import { Store } from '@ngrx/store';
import { Component, Input } from '@angular/core';    
import { Observable } from 'rxjs';
import * as fromReducer from '../../reducers/employee.reducer';
import * as fromActions from '../../actions/employee.actions';
import { EmployeeState } from '../../reducers/app.states';
import { Employee } from '../../models/employee';

@Component({
	selector: 'app-get-employee',
	templateUrl: 'get-employee.component.html',
    styleUrls: ['get-employee.component.scss']
})
export class GetEmployeeComponent {
    employees$: Observable<Employee[]>;
    displayedColumns: string[] = ['id', 'name', 'surname', 'department'];
    formView: boolean;

	constructor(private store: Store<EmployeeState>) {
        this.employees$ = store.select(fromReducer.getEmployees);
        this.formView = false;
	}
	
    searchEmployeeById(employeeId: string){
        if(employeeId !== ''){
            this.formView = true;
            this.store.dispatch(fromActions.GetByIdAction({payload: employeeId}));
        }
	}
} 