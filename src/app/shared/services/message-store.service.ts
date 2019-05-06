import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageStoreService {
  private message = '';
  protected message$ = new BehaviorSubject<string>('');

  constructor() {}

  public select$ = () => this.message$.asObservable();

  public dispatch(msg: string) {
    this.message = msg;
    this.message$.next(this.message);
  }
}
