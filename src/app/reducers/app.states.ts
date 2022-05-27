import { Employee } from '../models/employee';

export interface AppState {
	employeeState: EmployeeState;
}

export interface EmployeeState {
	employees: Employee[];
	message: any;
} 