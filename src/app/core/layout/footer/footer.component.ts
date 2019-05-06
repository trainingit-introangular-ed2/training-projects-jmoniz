import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageStoreService } from '../../../shared/services/message-store.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public currentDate: Date;
  public lastMessage$: Observable<any>;

  constructor(private messageStore: MessageStoreService) {}

  ngOnInit() {
    this.currentDate = new Date();
    this.lastMessage$ = this.messageStore.select$();
  }
}
