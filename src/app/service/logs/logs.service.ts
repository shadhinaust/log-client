import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Log } from './log.model';

@Injectable({
  providedIn: 'root'
})
export class LogsService {
  formData : Log
  list : [];
  readonly rootURL ="http://localhost:8080"
  constructor(private http : HttpClient) { }

  postEmployee(formData : Log){
   return this.http.post(this.rootURL+'/save-log', formData)
  }

  refreshList(){
    this.http.get(this.rootURL+'/logs')
    .toPromise()
    .then(res => {
      console.log(res)
      this.list = res as []
    })
  }
}
