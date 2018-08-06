import { Injectable } from '@angular/core';
import { HERRO} from './mock-heroes';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/internal/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



// 服务装饰器，提供可注入的服务
@Injectable({
  providedIn: 'root'
})
export class HeroService {


  private heroesUrl = 'api/heroes';  // URL to web api
  constructor(
    private http: HttpClient, // 把 HttpClient 注入到构造函数
    private msgService: MessageService) { }

  getHero(): Observable<Hero[]> {

    this.msgService.add('HeroService: fetched heroes');
    return of(HERRO);

  }

  getHeroWithID(id: number): Observable<Hero> {

    this.msgService.add(`HeroService: fetched hero id=${id}`);
    return of(HERRO.find(hero => hero.id === id));
  }


  private log(msg: string) {
    this.msgService.add(`HeroService: ${ msg }`);
  }
  // 网络请求模拟
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  getServeHeroes(): Observable<Hero[]> {
    console.log('哈哈哈');
    // .pipe() 网络异常处理
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        catchError(this.handleError('getHeroes', []))
      );
  }


  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions)
      .pipe(
        tap(_ => this.log(`update hero id = ${hero.id}`)),
        catchError(this.handleError<any>('updateHero'))
      );
  }

  getServeHeroesWithID(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    console.log(`url = ${url}`);
    return this.http.get<Hero>(url)
      .pipe(
        tap(_ => this.log(`fetched hero id = ${id}`)),
        catchError(this.handleError<Hero>(`getHeroes id = ${id}`))
      );
  }

  addServeHeroes(hero: Hero): Observable<Hero> {
    return this.http.post(this.heroesUrl, hero, httpOptions)
      .pipe(
        tap((hero: Hero) => this.log(`add hero w/id = ${hero.id}`)),
        catchError(this.handleError<Hero>('addHero'))
      );
  }

  deleteServeHero (hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, httpOptions)
      .pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  searchServeHero(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`)
      .pipe(
        tap(_ => this.log(`found heroes matching ${term}`)),
        catchError(this.handleError<Hero[]>('searchHeroes',[]))
    );
  }

}
