import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


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
    return this.http.get("api/users")
    .map(data => data.json()).toPromise()
  }

}
