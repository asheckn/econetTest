import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Views/dashboard/dashboard.component';
import { LoginComponent } from './Views/login/login.component';
import { ProjectsComponent } from './Views/projects/projects.component';
import { MembersComponent } from './Views/members/members.component';
import { TasksComponent } from './Views/tasks/tasks.component';
import { TaskComponent } from './Components/task/task.component';
import { ProjectComponent } from './Components/project/project.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { CreateProjectComponent } from './Views/create-project/create-project.component';
import { ProjectDetailComponent } from './Views/project-detail/project-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ProjectsComponent,
    MembersComponent,
    TasksComponent,
    TaskComponent,
    ProjectComponent,
    NavBarComponent,
    CreateProjectComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
