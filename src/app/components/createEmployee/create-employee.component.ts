import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Component, Input, Output, EventEmitter } from '@angular/core';    
import { Observable } from 'rxjs';
import * as fromReducer from '../../reducers/employee.reducer';
import * as fromActions from '../../actions/employee.actions';
import { EmployeeState } from '../../reducers/app.states';
import { Employee } from '../../models/employee';

@Component({
	selector: 'app-create-employee',
	templateUrl: 'create-employee.component.html',
    styleUrls: ['create-employee.component.scss']
})
export class CreateEmployeeComponent {
    employees$: Observable<Employee[]>;
    message$: Observable<Employee[]>;
    displayedColumns: string[] = ['id', 'name', 'surname', 'department'];
    formView: boolean;

	constructor(private store: Store<EmployeeState>, private formBuilder:FormBuilder) {
        this.employees$ = store.select(fromReducer.getEmployees);
        this.message$ = store.select(fromReducer.getMessage);
        this.formView = false;
	}
    employeeForm = this.formBuilder.group({
		id: ['', Validators.required ],
		name: '',
		surname: '',
        department: ''
	});

    get id() {
		return this.employeeForm.get('id');
	}

    onFormSubmit() {
        if(this.employeeForm.valid) {
            let employee = this.employeeForm.value;
            this.createEmployee(employee);
            this.formView = true;
            this.employeeForm.reset();
         }
    }
	createEmployee(employee: Employee){
		this.store.dispatch(fromActions.CreateAction({payload: employee}));
	}
} 