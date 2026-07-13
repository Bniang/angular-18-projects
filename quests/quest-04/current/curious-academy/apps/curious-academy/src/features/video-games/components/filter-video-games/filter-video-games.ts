import { AsyncPipe } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Observable, Subscription, tap } from 'rxjs';
import { GetAllPersonApplicatif } from '../../services/get-all-person.applicatif';
import { Person } from '../../services/models/person';
import { toSignal } from '@angular/core/rxjs-interop';

// Minimal local declaration to satisfy the injection token when the real
// PeopleService is defined elsewhere. This prevents "Cannot find name 'PeopleService'".


@Component({
  selector: 'app-filter-video-games',
  imports: [AsyncPipe],
  templateUrl: './filter-video-games.html',
  styleUrl: './filter-video-games.css',
})
export class FilterVideoGames implements OnInit , OnDestroy {
  private readonly subscription = new Subscription();

  /** current number of people fetched */
  peopleCount = 0;

  ngOnInit(): void {
    // subscribe once to keep a local count and for any side-effects
    const currentSubscription = this.people$.subscribe(
      {
        next : people => {  
          this.peopleCount = people.length;
        },
        error: err => console.error('Error fetching people:', err),  
      });

    this.subscription.add(currentSubscription);
  }

  ngOnDestroy(): void {
    // clean up subscription when component is destroyed
    this.subscription.unsubscribe();
    
  }

  private readonly peopleService = inject(GetAllPersonApplicatif);

  people$: Observable<Person[]> = this.peopleService.getAll().pipe(
    filter((people) => people.length > 0),
    tap((people) => console.info('Fetched people:', people)));


    people$$ = toSignal(this.people$); // on ne le voit pas mais via effect et donc appel du subscribe dans cet effect
  
}
