import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';


import { Approute} from './app.routes';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { JobsComponent } from './jobs/jobs.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutusComponent,
    ContactusComponent,
    JobsComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(Approute)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
