import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CommunicationService {

  private subject = new Subject<any>();
  constructor() { }


  sendMessage(message: string) {
    this.subject.next({ text: message });
  }
  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  clearMessage() {
    this.subject.next();
  }

}
