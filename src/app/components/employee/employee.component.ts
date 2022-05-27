import { FormBuilder, Validators } from '@angular/forms'
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';    
import { Observable } from 'rxjs';
import * as fromReducer from '../../reducers/employee.reducer';
import * as fromActions from '../../actions/employee.actions';
import { EmployeeState } from '../../reducers/app.states';
import { Employee } from '../../models/employee';

@Component({
	selector: 'app-employee',
	templateUrl: 'employee.component.html',
	styleUrls: ['employee.component.scss'] 
})
export class EmployeeComponent {
	employees$: Observable<Employee[]>;
	message$: Observable<any>;
	task= '';

	constructor(
		   private formBuilder:FormBuilder,
		   private store: Store<EmployeeState>) {

		this.employees$ = store.select(fromReducer.getEmployees);
		this.message$ = store.select(fromReducer.getMessage);
	}
	// employeeForm = this.formBuilder.group({
	// 	id: ['', Validators.required ],
	// 	name: '',
	// 	surname: '',
    //     department: ''
	// });
	// get id() {
	// 	return this.employeeForm.get('id');
	// }
	// onFormSubmit() {
	// 	if(this.employeeForm.valid) {
	// 	   let employee = this.employeeForm.value;
	// 	   this.createEmployee(employee);
	// 	   this.employeeForm.reset();
	// 	}
	//  }
	createEmployeeView(){
		this.task = 'create';
		this.store.dispatch(fromActions.ResetAction());
	}
	getEmployeeByIdView(){
		this.task = 'get';
		this.store.dispatch(fromActions.ResetAction());
	}
	loadAllEmployees(){
		this.task = 'all';
		this.store.dispatch(fromActions.ShowAllAction());
	}
	// createEmployee(employee: Employee){
	// 	this.store.dispatch(fromActions.CreateAction({payload: employee}));
	// }
	// searchEmployeeById(employeeId: string){
	// 	this.store.dispatch(fromActions.GetByIdAction({payload: employeeId}));
	// }
} 