import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DataService {

  constructor(private http:Http) { }

  Cars =[
  	'ford','honda','motor'
  ]

  myData()
  {
  return "How is the World";
  }
  result:any;

  getUsers() {
    return this.http.get("/api/users")
    .map(res => res.json())
  }
  createUser(data) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    //observable
    return this.http.post("api/employee/create",data)
    .map(res => res.json())
  }    
}