import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { AboutusComponent } from '../app/aboutus/aboutus.component';
import { ContactusComponent } from '../app/contactus/contactus.component';
import { JobsComponent } from '../app/jobs/jobs.component';
import { LoginComponent } from '../app/login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from '../app/admin/admin.component';

export const Approute:Routes=[
    {
path :'user',component : UserComponent
    },
    {
path :'app',component : AppComponent        
    },
    {
path :'aboutus',component : AboutusComponent        
    },
{
    path :'contactus',component : ContactusComponent        
},
{
    path :'jobs',component : JobsComponent     
},
{
    path :'login',component : LoginComponent        
},
{
    path :'',component : HomeComponent        
},
{
    path :'admin',component : AdminComponent        
},
];