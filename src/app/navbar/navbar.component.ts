import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {CommunicationService} from '../shared/services/communication.service';

@Component({
  selector: 'apc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  subscription: Subscription;
  constructor( private communicationService: CommunicationService) { }

  ngOnInit() {
    console.log('llamando servicios');
     this.subscription = this.communicationService.getMessage().subscribe((message) => {
       console.log(message);
     });
    console.log('subscription', this.subscription);
   }

}
