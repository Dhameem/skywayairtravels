import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
name:any;
username:any;
password:any;
ph_no:any;

  constructor(private dataservice:DataService) { }
  
    data:string='';
    users: Array<any>;
  
    ngOnInit() {
    console.log(this.dataservice.Cars);
  
      this.data=this.dataservice.myData();
  
      this.dataservice.getUsers().subscribe(res => {
        this.users = res
       console.log("user",this.users);
        
         });
 }
    register(){
        var data={Name:this.name,User_name:this.username,Password:this.password,Phone_no:this.ph_no};
        console.log(data);
       //observable http link  
       this.dataservice.createUser(data).subscribe(res => {
          alert("Registered successfully ");
          }, error => {
            console.log(ErrorEvent)
           })
   }
  }
  