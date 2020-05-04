import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogsComponent } from './logs/logs.component';
import { LogComponent } from './logs/log/log.component';
import { LogListComponent } from './logs/log-list/log-list.component';
import { LogsService } from './service/logs/logs.service';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    LogsComponent,
    LogComponent,
    LogListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LogsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
