import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor(private dataservice:DataService) { }

  data:string='';
  users: Array<any>;

  ngOnInit() {      
      this.dataservice.getUsers().subscribe(
        res => 
        this.users = res);  
  } 
}
