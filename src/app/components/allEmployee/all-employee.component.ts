import { FormBuilder, Validators } from '@angular/forms'
import { Store } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';    
import { Observable } from 'rxjs';
import * as fromReducer from '../../reducers/employee.reducer';
import * as fromActions from '../../actions/employee.actions';
import { EmployeeState } from '../../reducers/app.states';
import { Employee } from '../../models/employee';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';

@Component({
	selector: 'app-all-employee',
	templateUrl: 'all-employee.component.html',
    styleUrls: ['all-employee.component.scss']
})
export class AllEmployeeComponent {
    employees$: Observable<Employee[]>;
    dataSource:  any;
    displayedColumns: string[] = ['id', 'name', 'surname', 'department', 'do'];
    formView: boolean;
    employee: any;

	constructor(private store: Store<EmployeeState>, private formBuilder:FormBuilder) {
        this.employees$ = store.select(fromReducer.getEmployees);
        this.formView = false;
        this.employee = {};
	}

    employeeForm = this.formBuilder.group({
		id: ['', Validators.required ],
		name: '',
		surname: '',
        department: ''
	});
	
    Edit(el: any){
        this.formView = true;
        this.employee = el;
        console.log(el);
    }

    onFormSubmit(el: Employee){
        let employee = {
            'id': el.id,
            'name': this.employeeForm.value.name || el.name,
            'surname': this.employeeForm.value.surname || el.surname,
            'department': this.employeeForm.value.department || el.department,
        };
        console.log(employee);
        this.store.dispatch(fromActions.EditAction({payload: employee}));
        this.store.dispatch(fromActions.ShowAllAction());
        this.employeeForm.reset();
    }
} 