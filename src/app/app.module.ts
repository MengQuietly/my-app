import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms'; //  NgModel lives here
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {HeroService} from './hero.service';
import {MockHeroes} from './mock-heroes';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HideShowComponent } from './hide-show/hide-show.component';
import { LodingAnimComponent } from './loding-anim/loding-anim.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    LoginComponent,
    HeroSearchComponent,
    HideShowComponent,
    LodingAnimComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // 把 FormsModule 添加到 @NgModule 元数据的 imports 数组中
    AppRoutingModule,
    // 配置
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false}
    )
  ],
  providers: [
    HeroService,
    MockHeroes
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
