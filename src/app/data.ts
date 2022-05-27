import { InMemoryDbService } from 'angular-in-memory-web-api';

export class Data implements InMemoryDbService {
  createDb() {
    let employeesDetails = [
      {id: '1', name: 'Pete', surname: 'Jonhson', department: 'Finance'},
      {id: '2', name: 'Mike', surname: 'Jackson', department: 'Economical'},
      {id: '3', name: 'Nick', surname: 'Peterson', department: 'Creditial'},
      {id: '4', name: 'Poll', surname: 'Adwardson', department: 'Finance'},
      {id: '5', name: 'Jully', surname: 'Medison', department: 'Accounting'},
    ];
    return { employees: employeesDetails };
  }
}  