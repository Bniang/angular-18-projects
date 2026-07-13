import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { GetAllPeople } from './get-all-people';

@Injectable({
  providedIn: 'root',
})
export class GetAllPersonApplicatif {

  private readonly getAllPeople = inject(GetAllPeople);

  getAll() {
    return this.getAllPeople.getAll().pipe(
      // Map the API result to the array of people
      map((result) => result.results.map((person) => ({ id: person.uid, surname: person.name }))  )
    );
  }
  
}
