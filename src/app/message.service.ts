import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  msgList: string[] = [];
  add(msg: string) {
    this.msgList.push(msg);
  }

  clear() {
    this.msgList = [];
  }

  constructor() { }
}
