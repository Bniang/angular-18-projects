import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  PeopleApiResult } from './models';
//import { environment } from '../../../environments/developments/environment';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class GetAllPeople {

  private readonly httpClient = inject(HttpClient);

  getAll(): Observable<PeopleApiResult> {

    /*return new Observable<PeopleApiResult>((observer) => {
      this.httpClient.get<PeopleApiResult>('https://swapi.dev/api/people/').subscribe({
        next: (result) => {
          observer.next(result);
          observer.complete();
        },
        error: (error) => {
          observer.error(error);
        }
      });

      return new Observable(subscriber => {
        
        setTimeout(() => {    
        const result :PeopleApiResult = {
          results: [
            { uid: '1', name: 'Luke Skywalker' },
            { uid: '2', name: 'Darth Vader' }  
          ]
        }
          subscriber.next(result)
        },1500);


        setTimeout(() => {

          const result :PeopleApiResult = { 
          results: [
            { uid: '1', name: 'Mansour Niang' },
            { uid: '2', name: 'mouhamed Niang' }]

        }
          subscriber.next(result)
        }

        ,3000);
        
      });*/
    return this.httpClient.get<PeopleApiResult>(environment.apis.person.apiUrl); // le dev --> https://swapi.dev/api/people/

   }

}
