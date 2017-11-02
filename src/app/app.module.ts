import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommunicationService } from './shared/services/communication.service';
import { NavbarModule } from './navbar/navbar.module';
import { ComunnicationComponent } from './comunnication/comunnication.component';
import { ObscomunicationComponent } from './obscomunication/obscomunication.component';

@NgModule({
  declarations: [
    AppComponent,
    ComunnicationComponent,
    ObscomunicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule
  ],
  providers: [CommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
