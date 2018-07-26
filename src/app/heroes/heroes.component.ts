import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroesList } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero = 'Windstorm';
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm',
  // };

  // service 替换 heroList
  heroes: Hero[];

  heroList = HeroesList;

  // // 添加 click 事件处理器
  // selectedHero: Hero;
  // onSelectWithHero(selHero: Hero): void {
  //   this.selectedHero = selHero;
  // }

  // 添加路由后，onclick，onSelect  等方法就没用了
  constructor(private heroService: HeroService) { }
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    // this.heroService.getHero()
      // .subscribe(her => this.heroes = her);
    this.heroService.getServeHeroes()
      .subscribe(her => this.heroes = her);
  }

}
