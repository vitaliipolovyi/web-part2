import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { News } from './news.model';
import { environment } from './../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { NewsResponse } from './news-response.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  newsUrl: string = environment.apiUrl
  newsKey: string = environment.apiKey

  constructor(private http: HttpClient) { }

  private isValueEmpty(val: any) {
    const isArray = Array.isArray(val);
    return (!val || (isArray && val.length === 0));
  }

  getNews(): Observable<News[]> {
    let params = new HttpParams()
      .set('apiKey', this.newsKey)
    //   .set('sources', 'bbc-news');

    const newsFilter = {q: 'test'} as any
    Object.keys(newsFilter).forEach(filterKey => {
      params = params.set(filterKey, newsFilter[filterKey]);
    });

    const httpOptions = {
      params: params
    }

    return this.http.get<NewsResponse>(this.newsUrl + '/everything', httpOptions)
      .pipe(
        map((response: any) => response.articles), // !!!
        tap(_ => this.log('fetched news')),
        catchError(this.handleError<News[]>('getNews', [])
      ))
  }

  protected log(message: any) {
    console.log(message);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  protected handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
