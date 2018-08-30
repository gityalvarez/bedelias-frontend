import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StudentService } from './shared/student/student.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ListuserComponent } from './components/listuser/listuser.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import {RouterModule,Routes} from '@angular/router';
import{HttpModule}   from '@angular/http';
import {UserService} from './shared/user.service'
import {FormsModule} from '@angular/forms'

const appRoutes:Routes=[
  {path:'', component:ListuserComponent},
    {path:'op', component:UserFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    ListuserComponent,
    UserFormComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule

  ],
  providers: [StudentService,
              UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
