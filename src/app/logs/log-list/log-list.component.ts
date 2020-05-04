import { Component, OnInit } from '@angular/core';
import { ServerLog } from 'src/app/service/logs/server-log.model';
import { LogsService } from 'src/app/service/logs/logs.service';

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.css']
})
export class LogListComponent implements OnInit {
  service
  constructor(service: LogsService) {
      this.service = service
     }

  ngOnInit() {
    this.service.refreshList()
  }

  populateForm(log: ServerLog) {
    this.service.formData = Object.assign({}, log)
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteEmployee(id).subscribe(res => {
        this.service.refreshList()
      });
    }
  }

}
