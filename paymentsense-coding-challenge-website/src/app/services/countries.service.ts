import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  term = new Subject<string>();

  constructor() { }

  public setTerm(newTerm: string) {
    this.term.next(newTerm);
  }

  public getTerm(): Subject<string> {
    return this.term;
  }
}
