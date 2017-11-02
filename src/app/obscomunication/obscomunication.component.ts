import { Component, OnInit } from '@angular/core';
import {CommunicationService} from '../shared/services/communication.service';

@Component({
  selector: 'apc-obscomunication',
  templateUrl: './obscomunication.component.html',
  styleUrls: ['./obscomunication.component.css']
})
export class ObscomunicationComponent implements OnInit {
   message: any;
  constructor(private service: CommunicationService) { }

  ngOnInit() {
    this.service.getMessage().subscribe((data) => {
      this.message = data;
    });
  }

}
