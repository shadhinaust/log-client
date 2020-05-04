import { Component, OnInit } from '@angular/core';
import { LogsService } from '../service/logs/logs.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  title = "Server Logs"
  logs
  constructor(logsService: LogsService) { 
    this.logs = []
  }

  ngOnInit(): void {
  }

  getTitle() {
    return this.title
  }

  getLogs() {
    return this.logs
  }
}
