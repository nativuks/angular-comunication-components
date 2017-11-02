import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {CommunicationService} from '../shared/services/communication.service';


@Component({
  selector: 'apc-comunnication',
  templateUrl: './comunnication.component.html',
  styleUrls: ['./comunnication.component.css']
})
export class ComunnicationComponent implements OnInit {
  message: any;
  subscription: Subscription;
  constructor( private communicationService: CommunicationService) { }

  ngOnInit() {
    console.log('llamando servicios');
    this.subscription = this.communicationService.getMessage().subscribe((mesg) => {
      this.message = mesg;
      console.log('dentro del callback');
    });
  }

}
