import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class PaymentsenseCodingChallengeApiService {
  constructor(private httpClient: HttpClient) {}

  public getHealth(): Observable<string> {
    return this.httpClient.get(`${environment.api}/health`, { responseType: 'text' });
  }

  public getCountries(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${environment.api}/countries`, { responseType: 'json' });
  }
}
