import { Component } from '@angular/core';
import {CommunicationService} from './shared/services/communication.service';

@Component({
  selector: 'apc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apc';

constructor(private messageService: CommunicationService) {

}
  sendMessage(): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage('Message from Home Component to App Component!');
    console.log('enviado mensaje');
  }
  clearMessage(): void {
    // clear message
    this.messageService.clearMessage();
  }
}
