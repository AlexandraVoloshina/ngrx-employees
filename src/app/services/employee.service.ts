import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable()
export class EmployeeService {
    constructor(private http: HttpClient) { }

    url = "/api/employees";
    getAllEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this.url);
    }
    createEmployee(employee: Employee): Observable<Employee> {
        return this.http.post<Employee>(this.url, employee);
    }
    getEmployeeById(id: string): Observable<Employee[]> {
        console.log(id);
        let res = this.http.get<Employee[]>(this.url + '?id=' + id);
        console.log(res);
        return res;
    }   
    editEmployee(employee: Employee): Observable<Employee>{
        let id = employee.id;
        return this.http.put<Employee>(this.url + '?id=' + id, employee);
    } 
} 