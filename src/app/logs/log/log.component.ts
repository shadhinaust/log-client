import { Component, OnInit } from '@angular/core';
import { LogsService } from 'src/app/service/logs/logs.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  service
  constructor(service : LogsService) {
    this.service = service
   }

  ngOnInit(): void {
  }

  resetForm(form? : NgForm) {
    if(form != null) 
      form.resetForm()
    
    this.service.formData = {
      id : null,
      dateTime : null,
      message : '',
      format : '',
      duration : ''
    }
  }

  onSubmit(form: NgForm) {
      this.insertRecord(form)
  }

  insertRecord(form: NgForm) {
    console.log(form)
    this.service.postLog(form.value).subscribe(res => {
      console.log(res)
      this.resetForm(form)
      this.service.refreshList()
    });
  }
}
