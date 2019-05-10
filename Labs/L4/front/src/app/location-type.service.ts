import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, filter } from 'rxjs/operators';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { BaseService } from './base-service';
import { LocationType } from './location-type.model';

@Injectable({
  providedIn: 'root'
})
export class LocationTypeService extends BaseService {

  constructor(protected http: HttpClient) {
    super(http);
    this.apiUrl += '/location-type';
  }

  getLocationTypes(): Observable<LocationType[]> {
    return this.http.get<LocationType[]>(`${this.apiUrl}/list`)
      .pipe(
        tap(_ => this.log('fetched location types')),
        catchError(this.handleError<LocationType[]>('getLocationTypes', []))
      );
  }
}
