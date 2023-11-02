import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {
        "firstname": "Rockie",
        "middlename": "Rock",
        "lastname": "Rocks",
        "email": "r.r.r.@gmail.com",
        "password": "rock123",
        "startdate": "2021-10-09T15:12:56.848Z",
        "weekhours": 15,
        "totalhours": 300,
        "role": "employee"
      }
    ];
    return {users};
  }
}
