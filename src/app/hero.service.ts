import { Injectable } from '@angular/core';
import { HERRO} from './mock-heroes';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

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
    this.msgService.add('HeroService' + msg);
  }

  getServeHeroes(): Observable<Hero[]> {
    console.log('哈哈哈');
    return this.http.get<Hero[]>(this.heroesUrl);
  }
}
