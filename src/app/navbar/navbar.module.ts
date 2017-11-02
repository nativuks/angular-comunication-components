import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import {CommunicationService} from '../shared/services/communication.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [CommunicationService],
  declarations: [NavbarComponent]
})
export class NavbarModule { }
