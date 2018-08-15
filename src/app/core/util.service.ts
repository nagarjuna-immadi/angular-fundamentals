import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  
  constructor() { }

  private userNameSubject: BehaviorSubject<string> = new BehaviorSubject<string>('John Doe');

  userName$: Observable<string> = this.userNameSubject.asObservable();

  updateUSerName(userName: string) {
    this.userNameSubject.next(userName);
  }

}
