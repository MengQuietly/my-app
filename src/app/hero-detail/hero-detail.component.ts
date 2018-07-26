import {Component, Input, OnInit} from '@angular/core';

import { Hero } from '../hero';
import {ActivatedRoute} from '@angular/router';
import {HeroService} from '../hero.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // 注入服务到构造函数中，将值保存在私有变量中。
  constructor(
    private route: ActivatedRoute, // 保存路由信息
    private heroService: HeroService, // 从远端服务器获取数据，
    private location: Location, // 与服务器交互
  ) { }

  @Input() heros: Hero; // 添加装饰器
  ngOnInit() {
    this.getHeroesList();
  }

  getHeroesList(): void {
// (+) 操作符会把字符串转换成数字
//   route.snapshot 是一个路由信息的静态快照，抓取自组件刚刚创建完毕之后。
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHeroWithID(id)
      .subscribe(her => this.heros = her);
    console.log(this.heros.name);
  }
  goBack(): void {
    this.location.back();
  }
}
