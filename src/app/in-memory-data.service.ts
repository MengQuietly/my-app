import {InMemoryDbService} from 'angular-in-memory-web-api';

// 替代 mockHeroes
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 1, name: '哈哈哈1'},
      {id: 2, name: '一样一样2'},
      {id: 3, name: '纯纯粹粹3'},
      {id: 4, name: '乒乒乓乓4'},
      {id: 5, name: '呜呜呜呜呜5'},
      {id: 6, name: '啦啦啦啦啦6'},
      {id: 7, name: '清清浅浅7'},
      {id: 8, name: '不不不不不8'},
      {id: 9, name: '就斤斤计较9'},
      {id: 10, name: '是生生世世10'}
    ];
    return {heroes};
  }
}
